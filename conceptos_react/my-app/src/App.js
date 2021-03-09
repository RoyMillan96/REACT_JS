import React, { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
// import HolaMundo, { AdiosMundo } from './components/HolaMundo';

function App() {
  const user = {
    nombre: "Rodrigo Millan",
    edad: 25,
    color: "Rojo"
  }

  const saludarFn = (name, edad) => {
    // template string
    // console.log('Hola ' + name + " tiene " + edad + " años")
    console.log(`Hola ${name}, tiene ${edad} años.`)
  }

  // Hook useState
  const [stateCar, setStateCar] = useState(false);

  const encenderApagar = () => {
    // lo contrario al estado inicial
    setStateCar(!stateCar);
    //pasa el estado a otro componente si el otro componente no tiene acceso a StateCar
    // setStateCar(prevValue => !prevValue);
    setStateContar(contar + 1);
  }

  // Hook useEffect
  const [contar, setStateContar] = useState(0);

  useEffect(() => {
    console.log('contador: ', contar)
  }, [contar])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HolaMundo />
        <AdiosMundo /> */}
        {/* estaticos sin pasar array y objetos */}
        {/*<Saludar name="Ing. Rodrigo Millan Colin" edad="25" />
        <Saludar name="Lie. Zitlalin Gonzalez Gonzalez" edad="26" />*/}
        <Saludar userInfo={user} saludarFn={saludarFn} />

        {/* Hook de estado (useState) */}
        <h3> El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>Encender / apagar </button>

        {/* Hook de efecto (useEffect) */}

      </header>
    </div >
  );
}

export default App;
