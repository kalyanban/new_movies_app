import React from "react"
import { useNavigate } from "react-router-dom"


const Home = ({setAuth}) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        setAuth(false)
        navigate("/login")
    }

    return (
        <div className="home">
            <h1>Hello, Welcome!!!</h1>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Home