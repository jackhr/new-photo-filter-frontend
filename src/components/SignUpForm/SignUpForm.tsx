import { FormEvent, MouseEvent, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import * as UsersService from "../../utilities/users-service";
import { UserContext } from "../../contexts/userContext";
import { AuthPageContext } from "../../contexts/authPageContext";

export default function SignUpForm() {
    const { setUser } = useContext(UserContext);
    const { showLogin, setShowLogin } = useContext(AuthPageContext);
    const navigate = useNavigate();
    const viewOtherForm = (e: MouseEvent) => {
        e.preventDefault();
        setShowLogin(!showLogin);
    }
    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            name: formData.get("username") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };
        const user = await UsersService.signUp(data);
        setUser(user);
        navigate('/');
    }

    const inputClass = "border-solid border-2 border-grey p-1 rounded";

    return (
        <Form className="flex flex-col items-center gap-4" method="post" onSubmit={e => handleSignUp(e)}>
            <input className={inputClass} type="text" name="username" placeholder="Username" />
            <input className={inputClass} type="email" name="email" placeholder="Email"/>
            <input className={inputClass} type="password" name="password" placeholder="Password"/>
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