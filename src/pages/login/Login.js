import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./login.scss";
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const loginUser = async (username, password) => {
    try {
        const response = await axios.post('http://164.52.212.11/knowledge/api/auth/signin', {
            username: username,
            password: password
        });
        const { data } = response;
        if (data && data.token) {
            sessionStorage.setItem('token', data.token);
        }
        return data;
    } catch (error) {
        console.error('An error occurred while logging in:', error);
        throw error;
    }
};
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate()

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);
    const handleLogin = async () => {
        try {
            const data = await loginUser(username, password);  
            if (data && data.token) {
                setError('');
                console.log("edataaaaaaa   "+ data.token);
                localStorage.setItem("token", JSON.stringify(data.token));
                // Display success toast notification
                toast.success('Login successful!', {
                    position: toast.POSITION.TOP_RIGHT
                });
               setTimeout(function(){
                history('/');
               }, 1000)               
            }
        } catch (error) {
            setError('An error occurred while logging in. Please check your credentials.');
            toast.error('Login failed. Please check your credentials.', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };
    useEffect(() => {
        localStorage.setItem('username', username);
    }, [username]);
    return (
        <div className="login">
             <ToastContainer />
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>

                    <div className="form">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin}>Login</button>
                        {error && <p className="error">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
