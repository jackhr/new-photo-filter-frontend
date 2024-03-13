import { Link } from "react-router-dom";
import { MouseEvent, useContext } from "react";
import * as UsersService from "../../utilities/users-service";
import { UserContext } from "../../contexts/userContext";

export default function Navbar() {
    const { user, setUser } = useContext(UserContext);
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