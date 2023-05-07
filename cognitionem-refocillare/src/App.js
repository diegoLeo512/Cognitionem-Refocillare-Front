import React, { useState } from 'react';
import './App.css';
import imagen from './imagen.png';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  return (
    <div className="App">
      <div className="background-animation"></div> {/* Fondo animado */}
      <header className="App-header">
        <h1>Bienvenido a mi página web</h1>
      </header>
      <div className="Content">
        <img src={imagen} alt="Imagen" />
        <button onClick={toggleFormulario}>Iniciar</button>
        {mostrarFormulario && (
          <div className="Formulario">
            <label htmlFor="numeroVerbos">Número de verbos:</label>
            <input type="text" id="numeroVerbos" />

            <label htmlFor="inicio">Inicio:</label>
            <input type="text" id="inicio" />

            <label htmlFor="numeroIteracion">Número a añadir en cada iteración:</label>
            <input type="text" id="numeroIteracion" />

            <label htmlFor="opciones">Selecciona una opción:</label>
            <select id="opciones">
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
            </select>

            <div className="Botonera">
              <button onClick={cerrarFormulario}>Cancelar</button>
              <button>Iniciar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
