import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type AuthPageProviderProps = {
    children: ReactNode;
    initialState: boolean;
}

export interface authPageContextInterface {
    showLogin: boolean;
    setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
    showLogin: true,
    setShowLogin: (_loggingIn: boolean) => { },
} as authPageContextInterface;

export const AuthPageContext = createContext(defaultState);

export default function AuthPageContextProvider({ children, initialState }: AuthPageProviderProps) {
    const [showLogin, setShowLogin] = useState<boolean>(initialState);

    return (
        <AuthPageContext.Provider value={{ showLogin, setShowLogin }}>
            { children }
        </AuthPageContext.Provider>
    )
}