import React from "react";
import { useLogin } from "./useLogin";

export function Login() {
    const { data, onInputChange } = useLogin();

    return (
        <div>
            <input onChange={onInputChange} value={data.username} name="username" placeholder="username" />
            <input onChange={onInputChange} value={data.password} type="password" name="password" placeholder="password" />
            <input onChange={onInputChange} value={data.remember} type="checkbox" />
        </div>
    )
} 