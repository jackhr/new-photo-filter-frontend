import { useContext } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { AuthPageContext } from "../../contexts/authPageContext";

export default function AuthPage() {
    const { showLogin } = useContext(AuthPageContext);
    
    return showLogin ? <LoginForm /> : <SignUpForm />;
}