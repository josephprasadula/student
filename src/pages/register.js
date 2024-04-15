import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return(<>
        <h1>Register</h1>
        <button><Link to='/'>Home</Link></button><br />
        <button><Link to='/login'>Login</Link></button>
        </>);
}