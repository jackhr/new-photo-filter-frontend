import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";

export default function RootLayout() {
    const [showSideMenu, setShowSideMenu] = useState(false);
    return (
        <>
            <Navbar showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
            <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
            <Outlet />
        </>
    )
}