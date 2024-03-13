/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { User } from "../types";

type UserProviderProps = {
    children: ReactNode;
    initialUserState: User | null;
}

export interface userContextInterface {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

const defaultUserState = {
    user: null,
    setUser: (_user: User | null) => { },
} as userContextInterface;

export const UserContext = createContext(defaultUserState);

export default function UserContextProvider({ children, initialUserState }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(initialUserState);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}