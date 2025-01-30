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

    const newRegBtn = () => {
        navigate("/register")
    }

    return (
        <div className="login">
            <form className="form" onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} className="input" onChange={onChangeEmail} required />
                <input type="password" placeholder="Password" value={password} className="input" onChange={onChangePassword} required />
                <button type="submit" className="submit-button">Login</button>
            </form>
            <p>new user. register here.</p>
            <button type="button" onClick={newRegBtn}>Register Here</button>
        </div>
    )
}
export default Login