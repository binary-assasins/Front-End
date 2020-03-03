import React, { useState } from "react"; 
import axios from "axios"
import { Link } from "react-router-dom";

function Register(props) {
    
    const [register, setRegister] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = event => {
        event.preventDefault()
        axios
        .post(" ", register)
        .then(res => {
            localStorage.setItem("token", res.data.token) // pass token 
            props.history.push("/home")
        })
        .catch(error => {
            console.log("error from register components",error)
        },[])
    }

    const handleChange = event => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
    }

    return(
        <>
        <h2> Register Component </h2>
        <div> 
            <form onSubmit={handleSubmit}>
                <label> Username </label> 
                <input
                type="text"
                name="username"
                placeholder="enter username"
                value={props.username}
                onChange={handleChange}
                required
                />
                <label> Password </label>
                <input
                type="password"
                name="password"
                placeholder="enter password"
                value={props.password}
                onChange={handleChange}
                required
                />
                <div> 
                <button type="submit"> Register </button> 
                <Link to="/login"> Already have an account? </Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default Register