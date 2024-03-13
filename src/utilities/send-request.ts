import axios, { AxiosRequestConfig, Method } from 'axios';
import { getToken } from './users-service';
import { MainRes } from '../types';

// Define TypeScript interface for optional function parameters
interface SendRequestOptions {
    method?: Method;
    payload?: unknown | FormData | null; 
    payloadIsFormData?: boolean;
}

export async function sendRequest(url: string, options: SendRequestOptions = {}) {
    const { method = 'GET', payload = null, payloadIsFormData = false } = options;

    const axiosConfig: AxiosRequestConfig = {
        method,
        url,
        headers: {},
    };

    if (payload) {
        if (!axiosConfig.headers) axiosConfig.headers = {};
        axiosConfig.headers['Content-Type'] = payloadIsFormData ? 'multipart/form-data' : 'application/json';
        axiosConfig.data = payload;
    }

    const token = getToken();
    if (token) {
        if (!axiosConfig.headers) axiosConfig.headers = {};
        axiosConfig.headers['Authorization'] = `Bearer ${token}`;
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
