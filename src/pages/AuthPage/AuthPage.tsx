import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

interface AuthPageProps {
    showLogin: boolean;
}

export default function AuthPage({ showLogin }: AuthPageProps) {    
    return showLogin ? <LoginForm /> : <SignUpForm />;
}