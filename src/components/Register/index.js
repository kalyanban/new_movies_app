import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

import "./index.css"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        
        const users = JSON.parse(localStorage.getItem("users")) || []

        const existingUser = users.find((user) => user.email === email)
        if (existingUser) {
            alert("User already registered. Please Login.")
            navigate("/login")
            return
        }
        const newUser = {email, password}
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        alert("Registration successful. Please login.")
        navigate("/login")
    }

    return (
        <div className="register">
            <form className="register-form" onSubmit={handleRegister}>
                <input type="email" placeholder="Email" className="input" value={email} onChange={onChangeEmail} required />
                <input type="password" placeholder="Password" className="input" value={password} onChange={onChangePassword} required />
                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    )
}
export default Register