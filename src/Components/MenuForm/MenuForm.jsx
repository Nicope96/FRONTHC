import React, { useState } from 'react';
import './MenuForm.css';
import AudioRecorder from './AudioRecorder';
import PatientRecorder from './PatientRecorder'; // Importa el componente RegistrarUsuario

const Menu = () => {
  const [activeComponent, setActiveComponent] = useState(null); // Estado único para manejar el componente activo

  return (
    <div>
      <header className="header">
        <a href="/" className="logo">LOGO</a>
        <nav className="navbar">
          <a href="#">Inicio</a>
          <a href="#" onClick={() => setActiveComponent('recorder')}>Grabacion</a>
          <a href="#" onClick={() => setActiveComponent('PatientRecorder')}>Registrar Usuario</a>
          <a href="#">Consultar Historias</a>
        </nav>
      </header>
      {activeComponent === 'recorder' && <AudioRecorder />}
      {activeComponent === 'PatientRecorder' && <PatientRecorder />}
    </div>
  );
};

export default Menu;
