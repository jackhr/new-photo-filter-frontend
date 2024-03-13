import { FormEvent, MouseEvent } from "react";
import { Form } from "react-router-dom";
import { LoginFormProps } from "../../types";

export default function LoginForm({ setShowLogin, showLogin }: LoginFormProps) {
    const viewOtherForm = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        setShowLogin(!showLogin);
    };

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
        };
        console.log(data);
    }

    return (
        <div className="border-solid border-grey m-8 p-6">
            <Form className="flex flex-col items-center gap-4" method="post" onSubmit={e => handleLogin(e)}>
                <input className="border-solid border-2 border-grey p-1 rounded" type="text" name="username" placeholder="Username" />
                <input className="border-solid border-2 border-grey p-1 rounded" type="password" name="password" placeholder="Password"/>
                <button className="bg-black text-white" type="submit">Login</button>
                <span>
                    Not a user?
                    <button
                        onClick={(e) => viewOtherForm(e)} 
                        className="bg-transparent border-0 transition-none underline"
                    >
                        create an account
                    </button>
                </span>
            </Form>
        </div>
    );
}