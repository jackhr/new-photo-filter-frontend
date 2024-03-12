import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 fixed top-0 left-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white hover:text-white font-bold">Home</Link>
                <Link to="/about" className="text-white hover:text-white">About</Link>
                <Link to="/login" className="text-white hover:text-white">Login</Link>
            </div>
        </nav>
    )
}