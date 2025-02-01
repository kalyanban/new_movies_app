import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("token") ? true : false
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token)
  }, []);

  const handleLogin = () => {
    localStorage.setItem("token", "dummy-token")
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setAuth={handleLogin} />} />
        <Route path="/home" element={isAuthenticated ? <Home setAuth={handleLogout} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
