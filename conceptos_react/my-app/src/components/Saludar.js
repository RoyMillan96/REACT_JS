import React from "react";

export default function Saludar(props) {
    // Asignación por Desctructuring
    const { userInfo, saludarFn } = props;
    // valor por defecto
    const { nombre = "Anonimo", edad } = userInfo;


    return (
        // Recibir objetos por props
        /*<div>
            <h2>Hola {props.userInfo.nombre}, tego {props.userInfo.edad} años.</h2>
            <h3>Color favorito: {props.userInfo.color}.</h3>
        </div>*/

        // recibir funciones entre componentes por props
        <div>
            <button onClick={() => saludarFn(nombre, edad)}>Saludar</button>
        </div>
    )
}