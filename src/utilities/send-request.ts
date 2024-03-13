import axios, { AxiosRequestConfig, Method } from 'axios';
import { getToken } from './users-service';

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

    try {
        const response = await axios(axiosConfig);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.statusText || 'Bad Request');
        } else {
            // Handle unexpected errors
            throw new Error('An unexpected error occurred');
        }
    }
}
