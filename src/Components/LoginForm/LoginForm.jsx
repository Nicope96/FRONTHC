import React, { useState } from 'react';
import './LoginForm.css';
import { FaUserMd, FaUnlock, FaEnvelope, FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [action, setAction] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const navigate = useNavigate();

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    const navigateToMenu = () => {
        navigate('/menu');
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, contrasena });
            localStorage.setItem('token', response.data.token);
            navigateToMenu();
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/api/register', { email, nombre, documento, contrasena });
            loginLink();
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" id="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FaUserMd className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" id="contrasena" placeholder="CONTRASEÑA" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                        <FaUnlock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Recordar Usuario</label>
                        <a href="#">Olvidó su contraseña?</a>
                    </div>

                    <button type="button" onClick={handleLogin}>INGRESAR</button>
                    <div className="register-link">
                        <p>No cuentas con un usuario? <a href="#" onClick={registerLink}>Registrar</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>REGISTRAR</h1>

                    <div className="input-box">
                        <input type="text" id="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="text" id="nombre" placeholder="NOMBRE" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <FaUserMd className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="text" id="documento" placeholder="DOCUMENTO" value={documento} onChange={(e) => setDocumento(e.target.value)} />
                        <FaEye className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" id="contrasena" placeholder="CONTRASEÑA" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                        <FaUnlock className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" id="contrasenaCon" placeholder="CONFIRMAR CONTRASEÑA" />
                        <FaUnlock className="icon" />
                    </div>

                    <button type="button" onClick={handleRegister}>REGISTRAR</button>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Aceptar Términos y Condiciones</label>
                    </div>

                    <div className="register-link">
                        <p>Ya estás registrado? <a href="#" onClick={loginLink}>INGRESAR</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
