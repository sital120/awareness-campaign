import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Signup from './screens/signup'
import Login from './screens/login'
import Home from './screens/home'

import './App.css';
import './assets/css/main.css';

const ProtectedRoute = ({ element, redirectTo }) => {
    const session = localStorage.getItem('session');
    return session ?  <Navigate to={redirectTo} /> : element;
};

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                        path="/login"
                        element={
                            <ProtectedRoute element={<Login />} redirectTo="/home" />
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <ProtectedRoute element={<Signup />} redirectTo="/home" />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
