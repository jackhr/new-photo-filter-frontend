import swal from "sweetalert";
import { User } from "../../types";
import { Form, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { FormEvent, useContext } from "react";
import * as UsersService from "../../utilities/users-service";

export default function SignInForm() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };
        const res = await UsersService.signIn(data);
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
            <Form className="flex flex-col items-center gap-4" method="post" onSubmit={e => handleSignIn(e)}>
                <input className={inputClass} type="email" name="email" placeholder="Email" />
                <input className={inputClass} type="password" name="password" placeholder="Password"/>
                <button className="bg-black text-white" type="submit">SignIn</button>
            </Form>
        </div>
    );
}