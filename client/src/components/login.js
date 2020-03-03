import React, { useState } from "react"; 
import Axios from 'axios'; 

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
        Axios.post('', creds)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload); 
            history.push("/home");

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
            {/* <Link to="/register"> Create an Account </Link> */}
        </form>
        </>
    )
}

export default Login