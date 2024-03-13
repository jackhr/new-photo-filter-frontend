import { FormEvent, MouseEvent, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { LoginFormProps } from "../../types";
import * as UsersService from "../../utilities/users-service";
import { UserContext } from "../../contexts/userContext";

export default function LoginForm({ setShowLogin, showLogin }: LoginFormProps) {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const viewOtherForm = (e: MouseEvent) => {
        e.preventDefault();
        setShowLogin(!showLogin);
    };

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };
        const user = await UsersService.login(data);
        setUser(user);
        navigate('/');
    }

    const inputClass = "border-solid border-2 border-grey p-1 rounded";

    return (
        <div className="border-solid border-grey m-8 p-6">
            <Form className="flex flex-col items-center gap-4" method="post" onSubmit={e => handleLogin(e)}>
                <input className={inputClass} type="email" name="email" placeholder="Email" />
                <input className={inputClass} type="password" name="password" placeholder="Password"/>
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