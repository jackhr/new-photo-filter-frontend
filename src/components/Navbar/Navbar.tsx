import { Link } from "react-router-dom";
import { User } from "../../types";
import { MouseEvent } from "react";
import * as UsersService from "../../utilities/users-service";

interface RootLayoutProps {
    user: User | null;
    setUser: (user: User | null) => void;
}


export default function Navbar({ user, setUser }: RootLayoutProps) {
    const handleLogout = (e: MouseEvent) => {
        e.preventDefault();
        UsersService.logOut();
        setUser(null);
    }
    const linkClass = "text-white hover:text-white";
    return (
        <nav className="bg-blue-500 p-4 fixed top-0 left-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className={`${linkClass} font-bold`}>Home</Link>
                <Link to="/about" className={linkClass}>About</Link>
                {user ? (
                    <Link to="" onClick={e => handleLogout(e)} className={linkClass}>Logout</Link>
                ) : (
                    <Link to="/login" className={linkClass}>Login</Link>
                )}
            </div>
        </nav>
    )
}