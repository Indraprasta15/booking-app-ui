import { useContext, useState } from 'react';
import {AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    ;}

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
        }
    };

  return (
    <div className='login'>
        <h1 className="title">Login</h1>
        <div className="lContainer">
            <input 
                type="text" 
                placeholder='Username' 
                id='username'
                onChange={handleChange}
                className='lInput' />
            <input 
                type="password" 
                placeholder='Password' 
                id='password'
                onChange={handleChange}
                className='lInput' />

            <button disabled={loading} onClick={handleClick} className='logButton'>Login</button>
            {error && <span className='lError'>{error.message}</span>}
            <span className='lspan'>
                Don't have an account? <Link to="/register" style={{ textDecoration: "none" }}>Register</Link>
            </span>
        </div>
    </div>
  );
};

export default Login;