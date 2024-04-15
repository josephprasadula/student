import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Meals() {
    useEffect(()=>{
        console.log(window.location.pathname.split('/')[1], 'params')
    },[])
    return(<>
        <h1>Meals</h1>
        <button><Link to='/'>Home</Link></button><br />
        <button><Link to='/login'>Login</Link></button><br />
        </>);
}