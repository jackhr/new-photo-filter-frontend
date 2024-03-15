import { sendRequest } from './send-request';

const BASE_URL = "/api/photos";

export function getAll() {
    return sendRequest(BASE_URL);
}

export function create(payload: FormData) {
    return sendRequest(BASE_URL, {
        method: 'POST',
        payload,
        payloadIsFormData: true,
    });
}