import { FormEvent } from 'react';
import './Input.css';

interface InputProps {
    type?: string;
    placeholder?: string;
    className?: string;
    title?: string;
    name?: string;
}

export default function Input({
    type="text",
    placeholder="",
    className="border border-gray-300 p-4 rounded-md",
    name = "",
    title,
}: InputProps) {
    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        const func = input.value.length ? "add" : "remove";
        input.classList[func]("has-value");
    }
    return (
        <div className="input-container relative">
            <input type={type} placeholder={placeholder} className={className} onInput={e => handleInput(e)} name={name}/>
            <span className="absolute text-gray-400 bg-white left-4 flex items-center justify-center h-6 p-1 -top-3">{title ? title : placeholder}</span>
        </div>
    )
}