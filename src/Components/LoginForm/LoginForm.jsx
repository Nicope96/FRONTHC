import React, { useState } from 'react';
import './LoginForm.css';
import { FaUserMd, FaUnlock, FaEnvelope, FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [action, setAction] = useState('');
    const navigate = useNavigate();

    const registerLink = () => {
        setAction(' active');
    };

    const LoginLink = () => {
        setAction('');
    };

    const navigateToMenu = () => {
        navigate('/menu');
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" id="email" placeholder="EMAIL" />
                        <FaUserMd className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" id="contrasena" placeholder="CONTRASEÑA" />
                        <FaUnlock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Recordar Usuario</label>
                        <a href="#">Olvidó su contraseña?</a>
                    </div>

                    <button type="button" onClick={navigateToMenu}>INGRESAR</button>
                    <div className="register-link">
                        <p>No cuentas con un usuario? <a href="#" onClick={registerLink}>Registrar</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>REGISTRAR</h1>

                    <div className="input-box">
                        <input type="text" id="email" placeholder="EMAIL" />
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="text" id="nombre" placeholder="NOMBRE" />
                        <FaUserMd className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="text" id="documento" placeholder="DOCUMENTO" />
                        <FaEye className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" id="contrasena" placeholder="CONTRASEÑA" />
                        <FaUnlock className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" id="contrasenaCon" placeholder="CONFIRMAR CONTRASEÑA" />
                        <FaUnlock className="icon" />
                    </div>
                   
                    <button type="button">REGISTRAR</button>
                   
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Aceptar Términos y Condiciones</label>
                    </div>

                    <div className="register-link">
                        <p>Ya estás registrado? <a href="#" onClick={LoginLink}>INGRESAR</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
