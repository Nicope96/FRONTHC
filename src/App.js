import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import MenuForm from './Components/MenuForm/MenuForm';
import AudioRecorder from './Components/MenuForm/AudioRecorder'; 
import PatientRecorder from './Components/MenuForm/PatientRecorder'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/menu" element={<MenuForm />} />
          <Route path="/grabacion" element={<AudioRecorder />} />
          <Route path="/grabacion" element={<PatientRecorder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

