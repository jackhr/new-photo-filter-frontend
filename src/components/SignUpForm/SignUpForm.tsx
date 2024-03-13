import { FormEvent, MouseEvent } from "react";
import { Form } from "react-router-dom";
import { signUp } from "../../utilities/users-api";

interface SignUpFormProps {
    showLogin: boolean;
    setShowLogin: (showLogin: boolean) => void;
}

export default function SignUpForm({ showLogin, setShowLogin }: SignUpFormProps) {
    const viewOtherForm = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        setShowLogin(!showLogin);
    }
    const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            username: formData.get("username") as string,
            password: formData.get("password") as string,
        };
        await signUp(data);
    }
    return (
        <Form className="flex flex-col items-center gap-4" method="post" onSubmit={e => handleSignUp(e)}>
            <input className="border-solid border-2 border-grey p-1 rounded" type="text" name="username" placeholder="Username" />
            <input className="border-solid border-2 border-grey p-1 rounded" type="password" name="password" placeholder="New Password"/>
            <input className="border-solid border-2 border-grey p-1 rounded" type="password" name="confirm-password" placeholder="Confirm Password"/>
            <button className="bg-black text-white" type="submit">Create</button>
            <span>
                Already a user?
                <button
                    onClick={e => viewOtherForm(e)} 
                    className="bg-transparent border-0 transition-none underline"
                >
                    login
                </button>
            </span>
        </Form>
    );
}