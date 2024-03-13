import { MainRes, User, UserLoginData, UserSignUpData } from '../types';
import * as usersAPI from './users-api';

export async function login(credentials: UserLoginData): Promise<MainRes> {
    try {
        const res = await usersAPI.login(credentials);
        if (res.success && res.data) {
            localStorage.setItem('token', res.data.token);
            delete res.data.token;
            res.data.user = getUser();
        } else {
            res.data = {
                message: res?.data?.message,
                user: null
            };
        }
        return res;
    } catch(err) {
        return {
            success: false,
            data: {
                message: (err as Error).message,
                user: null
            }
        };
    }
}

export async function signUp(userData: UserSignUpData) {
    try {
        await usersAPI.signUp(userData);
        // localStorage.setItem('token', token);
        return getUser();
    } catch {
        throw new Error('Invalid Sign Up');
    }
}

export function logOut() {
    localStorage.removeItem('token');
}

export function getToken(): string | null {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
        // Token has expired - remove it from localStorage
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getUser(): User | null {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}