import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            <h1>Oops!</h1>
            <h1 className="mt-2 mb-12">Page Not Found</h1>
            <Link to="/" className="bg-blue-500 rounded-lg px-8 py-2 text-white font-bold transition-all hover:bg-transparent hover:text-blue-500 border-2 border-solid border-blue-500 active:bg-white active:text-white w-full">Return to Safety</Link>
        </div>
    )
}