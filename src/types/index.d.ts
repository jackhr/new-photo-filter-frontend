export interface LoginFormProps {
    showLogin: boolean;
    setShowLogin: (showLogin: boolean) => void;
}

export interface UserSignUpData {
    username: string;
    password: string;
}