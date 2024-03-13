import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage() {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            {showLogin ? (
                <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} />
            ) : (
                <SignUpForm showLogin={showLogin} setShowLogin={setShowLogin} />
            )}
        </div>
    );
}