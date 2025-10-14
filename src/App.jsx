// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar'; 
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects'; 
import { Contact } from './components/Contact'; 
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Aquí puedes agregar otros componentes como el contenido de la página */}
    </div>
  );
}

export default App;
