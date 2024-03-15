export type MainRes = {
    data: Partial<any> | null;
    success: boolean
}

export interface LoginFormProps {
    showLogin: boolean;
    setShowLogin: (showLogin: boolean) => void;
}

export interface UserSignUpData {
    name: string;
    email: string;
    password: string;
}

export interface UserLoginData {
    email: string;
    password: string;
}

type User = {
    _v: number;
    _id: string;
    name: string;
    email: string;
    password?: string;
    createdAt: string;
    updatedAt: string;
}

type Photo = {
    _v: number;
    _id: string;
    name: string;
    user: User;
    sourceURL: string;
    newEditURLs: string[];
    AWSKey: string;
    createdAt: string;
    updatedAt: string;
}