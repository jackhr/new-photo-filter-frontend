import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { userProps } from "../../types";

export default function AuthPage({ user, setUser }: userProps) {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div>
            {showLogin ? (
                <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} user={user} setUser={setUser} />
            ) : (
                <SignUpForm showLogin={showLogin} setShowLogin={setShowLogin} user={user} setUser={setUser} />
            )}
        </div>
    );
}