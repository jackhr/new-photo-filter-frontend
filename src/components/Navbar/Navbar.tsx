import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Menu } from "lucide-react";

interface NavbarProps {
    showSideMenu: boolean;
    setShowSideMenu: (show: boolean) => void
}

export default function Navbar({ showSideMenu, setShowSideMenu }: NavbarProps) {
    const { user } = useContext(UserContext);
    const linkClass = "text-white hover:text-white font-bold";
    return (
        <nav className="bg-blue-500 p-4 fixed top-0 left-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className={linkClass}>
                    <img src="/assets/images/photo-filter-logo.svg" className={`h-12 ${user ? "animate-spin-slow" : ""}`} alt="Photo Filter Logo" title="Home" />
                </Link>
                {user && (
                    <span className={linkClass}>Hello, {user.name}</span>
                )}
                <Menu size="3rem" color="white" cursor="pointer" onClick={() => setShowSideMenu(!showSideMenu)} />
            </div>
        </nav>
    )
}