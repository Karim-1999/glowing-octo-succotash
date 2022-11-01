import React from "react";
import { Link } from "react-router-dom";

export function Welcome(name = 'Jimmy') {
    return (
        <div>
            <h1>Hello, {name}</h1>
            <Link to="/counter">Go to Counter</Link>
        </div>
    )
} 