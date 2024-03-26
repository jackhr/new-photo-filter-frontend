import { sendRequest } from './send-request';
import { UserLoginData, UserSignUpData } from '@/types';

const BASE_URL = "/api/users";

export function signUp(userData: UserSignUpData) {
    return sendRequest(BASE_URL, {
        method: 'POST',
        payload: userData,
    });
}

export function signIn(userData: UserLoginData) {
    return sendRequest(`${BASE_URL}/signIn`, {
        method: 'POST',
        payload: userData,
    });
}