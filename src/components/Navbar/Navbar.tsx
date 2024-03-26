import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, MouseEvent } from "react";
import { UserContext } from "@/contexts/userContext";

interface NavbarProps {
    showSideMenu: boolean;
    handleSignOut: (e: MouseEvent) => void;
    setShowSideMenu: (show: boolean) => void;
}

export default function Navbar({ showSideMenu, setShowSideMenu, handleSignOut }: NavbarProps) {
    const { user } = useContext(UserContext);
    const linkClass = "text-white hover:text-white font-bold";
    const buttonClass = "bg-white rounded-lg px-8 py-2 text-blue-500 font-bold transition-all hover:bg-transparent hover:text-white border-2 border-solid border-white active:bg-white active:text-blue-500";
    return (
        <nav className="bg-blue-500 p-4 fixed top-0 left-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className={linkClass}>
                    <img src="/assets/images/photo-filter-logo.svg" className={`h-12 ${user ? "animate-spin-slow" : ""}`} alt="Photo Filter Logo" title="Home" />
                </Link>
                {user && (
                    <span className={linkClass}>Hello, {user.name}</span>
                )}
                <Menu className="block sm:hidden" size="3rem" color="white" cursor="pointer" onClick={() => setShowSideMenu(!showSideMenu)} />
                <div className="hidden sm:flex items-center gap-10">
                    {user ? (
                        <Link to="" onClick={e => handleSignOut(e)} className={buttonClass}>Sign Out</Link>
                    ) : (
                        <>
                            <Link to="/sign-in" className={linkClass}>Sign In</Link>
                            <Link to="/sign-up" className={buttonClass}>Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}