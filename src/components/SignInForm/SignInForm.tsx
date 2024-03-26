import swal from "sweetalert";
import { User } from "@/types";
import Input from "@/components/Input/Input";
import { FormEvent, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { UserContext } from "@/contexts/userContext";
import * as UsersService from "@/utilities/users-service";

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

    return (
        <div className="m-8 mx-auto p-6 flex h-full items-center justify-center w-max">
            <Form className="flex flex-col items-center gap-4 w-full" method="post" onSubmit={e => handleSignIn(e)}>
                <Input type="email" placeholder="Email" name="email" />
                <Input type="password" placeholder="Password" name="password" />
                <button className="bg-blue-500 rounded-lg px-8 py-2 text-white font-bold transition-all hover:bg-transparent hover:text-blue-500 border-2 border-solid border-blue-500 active:bg-white active:text-white w-full" type="submit">Sign In</button>
            </Form>
        </div>
    );
}