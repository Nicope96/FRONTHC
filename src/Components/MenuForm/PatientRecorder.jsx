import React from 'react';
import './PatientRecorder.css';
import { FaUserMd, FaEnvelope, FaEye } from "react-icons/fa";

const PatientRecorder = () => {
    return (
        <div id="patient-recorder-wrapper">
            <div id="patient-recorder-form-box">
                <form>
                    <h1>CREAR PACIENTE</h1>
                    <div id="patient-recorder-input-box">
                        <input type="text" id="email" placeholder="EMAIL PACIENTE" />
                        <FaEnvelope id="patient-recorder-icon" />
                    </div>
                    <div id="patient-recorder-input-box">
                        <input type="text" id="telefono" placeholder="TELEFONO PACIENTE" />
                        <FaEnvelope id="patient-recorder-icon" />
                    </div>
                    <div id="patient-recorder-input-box">
                        <input type="text" id="nombre" placeholder="NOMBRE PACIENTE" />
                        <FaUserMd id="patient-recorder-icon" />
                    </div>
                    <div id="patient-recorder-input-box">
                        <input type="text" id="documento" placeholder="DOCUMENTO PACIENTE" />
                        <FaEye id="patient-recorder-icon" />
                    </div>
                    <button type="button" id="patient-recorder-button">REGISTRAR</button>
                    <div id="patient-recorder-remember-forgot">
                        <label>
                            <input type="checkbox" />Aceptar Términos y Condiciones
                        </label>
                    </div>
                    <div id="patient-recorder-register-link">
                        <p>Ya estás registrado? <a href="#">INGRESAR</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientRecorder;
