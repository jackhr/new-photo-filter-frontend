import swal from "sweetalert";
import Input from "../Input/Input";
import { User } from "../../types";
import { FormEvent, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import * as UsersService from "../../utilities/users-service";

export default function SignUpForm() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };
        const res = await UsersService.signUp(data);
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

    return (
        <Form className="flex flex-col items-center gap-4" method="post" onSubmit={e => handleSignUp(e)}>
            <Input type="text" placeholder="Username" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <button className="bg-blue-500 rounded-lg px-8 py-2 text-white font-bold transition-all hover:bg-transparent hover:text-blue-500 border-2 border-solid border-blue-500 active:bg-white active:text-white w-full" type="submit">Sign Up</button>
        </Form>
    );
}