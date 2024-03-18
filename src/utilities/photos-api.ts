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

export function deleteOne(photoId: string) {
    return sendRequest(`${BASE_URL}/${photoId}`, {
        method: 'DELETE',
    });
}

export function applyFilter(photoId: string, filterType: string) {
    return sendRequest(`${BASE_URL}/${photoId}/filter`, {
        method: 'POST',
        payload: { filterType },
    });
}