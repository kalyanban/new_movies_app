import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineMenuOpen } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import "./index.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    const handleLogo = () => {
        navigate("/home")
    }

    return (
        <div className="header">
            <div className="main-head-container">
                <img src="https://res.cloudinary.com/dwdspbybh/image/upload/v1738304017/logo-removebg-preview_qy0ypw.png" alt="app-logo" onClick={handleLogo} className="header-logo" />
                <ul className="header-tabs-container">
                    <li className="lg-header-tab">Home</li>
                    <li className="lg-header-tab">Popular</li>
                    <li className="lg-header-tab" onClick={handleLogout}>Logout</li>
                </ul>
                <button className="menu-button" onClick={toggleMenu}><MdOutlineMenuOpen className="menu-icon" /></button>
            </div>
            <ul className={`sm-header-tabs ${isOpen ? "open" : ""}`}>
                <li className="header-tab">Home</li>
                <li className="header-tab">Popular</li>
                <li className="header-tab" onClick={handleLogout}>Logout</li>
            </ul>
            <div className="search-container">
                <div className="search-movies-container">
                    <input type="text" placeholder="Search" className="search-bar" />
                    <button className="search-icon-button"><FaSearch className="search-icon" /></button>
                </div>
            </div>
        </div>
    )
}
export default Header