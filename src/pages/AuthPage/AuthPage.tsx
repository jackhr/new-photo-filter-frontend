import SignInForm from "@/components/SignInForm/SignInForm";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

interface AuthPageProps {
    showLogin: boolean;
}

export default function AuthPage({ showLogin }: AuthPageProps) {    
    return showLogin ? <SignInForm /> : <SignUpForm />;
}