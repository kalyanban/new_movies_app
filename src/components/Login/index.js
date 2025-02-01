import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

import "./index.css"

const Login = ({setAuth}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = async (event) => {
        event.preventDefault()

        const users = JSON.parse(localStorage.getItem("users")) || []

        const validUser = users.find((user) => user.email === email && user.password === password)
        if (validUser) {
            localStorage.setItem("token", "dummy-token")
            setAuth(true)
            navigate("/home")
        } else {
            alert("Invalid credentials. Please try again.")
        }
    }

    return (
        <div className="login">
            <form className="form" onSubmit={handleLogin}>
            <img src="https://res.cloudinary.com/dwdspbybh/image/upload/v1738304017/logo-removebg-preview_qy0ypw.png" alt="app logo" className="app-logo" />
                <div className="input-container">
                    <label className="label" htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" value={email} id="email" className="input" onChange={onChangeEmail} required />
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" value={password} id="password" className="input" onChange={onChangePassword} required />
                </div>
                <button type="submit" className="submit-button">Login</button>
                <p className="dont">Don't have an account? <span><a href="/register" className="log-reg">Register Here</a></span></p>
            </form>
        </div>
    )
}
export default Login