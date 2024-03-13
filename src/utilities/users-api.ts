import { UserSignUpData } from '../types';
import { sendRequest } from './send-request';

const BASE_URL = "/api/users";

export function signUp(userData: UserSignUpData) {
    return sendRequest(BASE_URL, {
        method: 'POST',
        payload: userData,
    });
}