import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
export default function Home() {
    const [mealsId, setMealsId] = useState(1);
    return(<>
    <h1>Home</h1>
    <button><Link to='/login'>Login</Link></button><br />
    <button><Link to='/register'>Register</Link></button><br />
    <button><Link to={`/${mealsId}/meals`}>Meals with id</Link></button><br />
    <button><Link to={`/meals`}>Meals with out id</Link></button><br />

    </>);
}