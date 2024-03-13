import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { User } from "../../types";

interface RootLayoutProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

export default function RootLayout({ user, setUser }: RootLayoutProps) {
    return (
        <>
            <Navbar user={user} setUser={setUser} />
            <Outlet />
        </>
    )
}