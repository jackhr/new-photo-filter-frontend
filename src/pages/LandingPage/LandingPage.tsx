import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <img className="m-auto animate-spin-slow" src="/assets/images/photo-filter-logo.svg" alt="" />
            <h1 className="press-start my-6">Photo Filter</h1>
            <div className="flex gap-4">
                <Link to="/sign-in" className="bg-white rounded-lg px-8 py-2 text-blue-500 hover:text-blue-500 font-bold border-2 border-solid border-blue-500 w-full">Sign In</Link>
                <Link to="/sign-up" className="bg-blue-500 rounded-lg px-8 py-2 text-white hover:text-white font-bold border-2 border-solid border-blue-500 w-full">Sign Up</Link>
            </div>
        </>
    )
}