import { Link, useNavigate } from "react-router-dom";
import { MouseEvent, useContext } from "react";
import * as UsersService from "../../utilities/users-service";
import { UserContext } from "../../contexts/userContext";

export default function Navbar() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const handleSignOut = (e: MouseEvent) => {
        e.preventDefault();
        UsersService.signOut();
        setUser(null);
        navigate('/');
    }
    const linkClass = "text-white hover:text-white font-bold";
    return (
        <nav className="bg-blue-500 p-4 fixed top-0 left-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className={linkClass}>
                    <img src="/assets/images/photo-filter-logo.svg" className={`h-12 ${user ? "animate-spin-slow" : ""}`} alt="Photo Filter Logo" title="Home" />
                </Link>
                {user ? (
                    <>
                        <span className={linkClass}>Hello, {user.name}</span>
                        <Link to="" onClick={e => handleSignOut(e)} className={linkClass}>Sign Out</Link>
                    </>
                ) : (
                    <div className="flex items-center gap-10">
                        <Link to="/sign-in" className={linkClass}>Sign In</Link>
                        <Link to="/sign-up" className="bg-white rounded-lg px-8 py-2 text-blue-500 font-bold transition-all hover:bg-transparent hover:text-white border-2 border-solid border-white active:bg-white active:text-blue-500">Sign Up</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}