import { MainRes } from '@/types';
import { getToken } from './users-service';
import axios, { AxiosRequestConfig, Method, ResponseType } from 'axios';

interface SendRequestOptions {
    method?: Method;
    payload?: unknown | FormData | null; 
    payloadIsFormData?: boolean;
    responseType?: ResponseType;
}

export async function sendRequest(url: string, options: SendRequestOptions = {}) {
    const { method = 'GET', payload = null, payloadIsFormData = false, responseType = 'json' } = options;
    const axiosConfig: AxiosRequestConfig = {
        method,
        url,
        responseType
    };
    const token = getToken();

    if (token && responseType !== 'blob') {
        if (!axiosConfig.headers) axiosConfig.headers = {};
        axiosConfig.headers['Authorization'] = `Bearer ${token}`;
    }
    
    if (payload) {
        if (!axiosConfig.headers) axiosConfig.headers = {};
        axiosConfig.headers['Content-Type'] = payloadIsFormData ? 'multipart/form-data' : 'application/json';
        axiosConfig.data = payload;
    }

    const res = {
        data: null,
        success: true,
    } as MainRes;

    try {
        const response = await axios(axiosConfig);
        res.data = response.data;
    } catch (error) {
        res.success = false;
        if (axios.isAxiosError(error)) {
            res.data = error.response?.data;
        } else {
            // Handle unexpected errors
            res.data = {
                message: 'An unexpected error occurred'
            };
        }
    }
    return res;
}
