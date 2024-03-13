import { MouseEvent, useState } from "react";
import { Form } from "react-router-dom";
import { FormEvent } from "react";

export default function LoginForm() {
    const [loggingIn, setLoggingIn] = useState(false);
    const viewOtherForm = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        setLoggingIn(!loggingIn);
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

    const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
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
            {loggingIn ? (
                <Form className="flex flex-col items-center gap-4" method="post" onSubmit={(e) => handleLogin(e)}>
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
            ) : (
                <Form className="flex flex-col items-center gap-4" method="post"  onSubmit={(e) => handleSignUp(e)}>
                    <input className="border-solid border-2 border-grey p-1 rounded" type="text" name="username" placeholder="Username" />
                    <input className="border-solid border-2 border-grey p-1 rounded" type="password" name="password" placeholder="New Password"/>
                    <input className="border-solid border-2 border-grey p-1 rounded" type="password" name="confirm-password" placeholder="Confirm Password"/>
                    <button className="bg-black text-white" type="submit">Create</button>
                    <span>
                        Already a user?
                        <button
                            onClick={(e) => viewOtherForm(e)} 
                            className="bg-transparent border-0 transition-none underline"
                        >
                            sign in
                        </button>
                    </span>
                </Form>
            )}
        </div>
    );
}