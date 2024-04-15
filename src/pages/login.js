import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
export default function Login() {
    return(<>
        <h1>Login</h1>
        <button><Link to='/'>Home</Link></button><br />
        <button><Link to='/register'>Register</Link></button>
        </>);
}