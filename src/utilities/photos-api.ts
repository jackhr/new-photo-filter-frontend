import { sendRequest } from './send-request';

const BASE_URL = "/api/photos";

export function create(payload: FormData) {
    return sendRequest(BASE_URL, {
        method: 'POST',
        payload,
        payloadIsFormData: true,
    });
}