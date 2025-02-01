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
            alert("User already exists. Please Login.")
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
            <form className="form" onSubmit={handleRegister}>
                <img src="https://res.cloudinary.com/dwdspbybh/image/upload/v1738304017/logo-removebg-preview_qy0ypw.png" alt="app logo" className="app-logo" />
                <div className="input-container">
                    <label className="label" htmlFor="regEmail">Your Email</label>
                    <input type="email" placeholder="Email" id="regEmail" className="input" value={email} onChange={onChangeEmail} required />
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="regPassword">Your Password</label>
                    <input type="password" placeholder="Password" id="regPassword" className="input" value={password} onChange={onChangePassword} required />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    )
}
export default Register