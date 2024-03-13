import swal from "sweetalert";
import { User } from "../../types";
import { Form, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { FormEvent, MouseEvent, useContext } from "react";
import * as UsersService from "../../utilities/users-service";
import { AuthPageContext } from "../../contexts/authPageContext";

export default function LoginForm() {
    const { setUser } = useContext(UserContext);
    const { showLogin, setShowLogin } = useContext(AuthPageContext);
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
        const res = await UsersService.login(data);
        if (res.success) {
            setUser(res?.data?.user as User);
            navigate('/');
        } else {
            swal({
                text: res?.data?.message,
                title: "Error",
                icon: "error",
            });
        }
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