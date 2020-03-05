import React, { useState } from "react"; 
import axios from 'axios'; 

 const Login = ({history}) => {
    const [creds, setCreds] = useState({
        username: "",
        password: ""
    });
    const handleChange = event => {
        setCreds({...creds, [event.target.name]: event.target.value});

    };
    
    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://binary-assassins.herokuapp.com/api/login/', creds)
        .then(res => {
            console.log("res from logins",res);
            localStorage.setItem('token', res.data.token); 
            history.push("/roommap");
    
        })
        .catch(err => console.log(err.response))
    };

    return(
        <>
        <h2> Login Component </h2>
        <form onSubmit={handleSubmit}>
            <label> Username </label>
            <input type="text" 
            name="username" 
            placeholder="username" 
            onChange={handleChange} 
            value={creds.username}    
            />
            <label> Password </label> 
            <input 
            type="password" 
            name="password" 
            placeholder="password"
            onChange={handleChange} 
            value={creds.password}    
            />
            <button type="submit">Log In</button> 
        </form>
        </>
    )
}

export default Login