import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { signOut } from "../../utilities/users-service";
import { UserContext } from "../../contexts/userContext";
import { useState, useContext, MouseEvent } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";

export default function RootLayout() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [showSideMenu, setShowSideMenu] = useState(false);
    const handleSignOut = (e: MouseEvent) => {
        e.preventDefault();
        signOut();
        setUser(null);
        setShowSideMenu(false);
        navigate('/');
    }
    return (
        <>
            <Navbar showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} handleSignOut={handleSignOut} />
            <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} handleSignOut={handleSignOut} />
            <Outlet />
        </>
    )
}