import { Link } from "react-router-dom";
import { useContext, MouseEvent } from "react";
import { UserContext } from "@/contexts/userContext";

interface SideMenuProps {
    showSideMenu: boolean;
    handleSignOut: (e: MouseEvent) => void;
    setShowSideMenu: (show: boolean) => void;
}

export default function SideMenu({ showSideMenu, setShowSideMenu, handleSignOut }: SideMenuProps) {
    const { user } = useContext(UserContext);
    const linkClass = "bg-white rounded-lg px-8 py-2 text-blue-500 font-bold transition-all hover:bg-transparent hover:text-white border-2 border-solid border-white active:bg-white active:text-blue-500";
    const sideMenuClass = `absolute left-0 top-0 flex justify-end w-screen h-screen z-10 transition-opacity backdrop-blur-sm overflow-hidden duration-500 ${showSideMenu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`;

    return (
        <div
            className={sideMenuClass}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            onClick={() => setShowSideMenu(false)}
        >
            <div className={`absolute h-full flex flex-col bg-blue-500 p-8 transition-all duration-500 ease-in gap-4 ${showSideMenu ? "right-0" : "-right-full"}`}>
                {user ? (
                    <Link to="" onClick={e => handleSignOut(e)} className={linkClass}>Sign Out</Link>
                ) : (
                    <>
                        <Link to="/sign-in" className={linkClass}>Sign In</Link>
                        <Link to="/sign-up" className={linkClass}>Sign Up</Link>
                    </>
                )}
            </div>
        </div>
    )
}