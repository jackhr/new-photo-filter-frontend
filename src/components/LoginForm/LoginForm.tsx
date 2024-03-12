import { Form, useSubmit } from "react-router-dom";

export default function LoginForm() {
    const submit = useSubmit();
    return (
        <div className="border-solid border-grey border-2 rounded-md m-8 p-6">
            <h1 className="mb-4">This is the Login form</h1>
            <Form className="flex flex-col items-center gap-4" method="post" action="/events" onChange={(evt) => {
                evt.preventDefault();
                submit(evt.currentTarget);
            }}>
                <input className="border-solid border-2 border-grey p-1 rounded" type="text" name="username" placeholder="James Finn" />
                <input className="border-solid border-2 border-grey p-1 rounded" type="password" name="password" placeholder="Password"/>
                <button className="bg-black text-white" type="submit">Create</button>
            </Form>
        </div>
    );
}