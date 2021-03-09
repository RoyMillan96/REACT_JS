// Camel Case en nombres de componentes y mismo nombre en la función
import React from "react";

export default function HolaMundo() {
    return (
        <div>
            <h1>
                Hola Mundo
            </h1>
            <h2>
                Ing. Rodrigo Millan Colin
            </h2>
            <h3>
                Software Developer
            </h3>
        </div>
    )
}

// se ocupa cuando se quiere llamar en otro componente
// export default HolaMundo;

// No se puede exportar varias funciones por default solo se permite una a por componente y para resolverlo se utiliza solo el export y se envuelve entre {} en el componente a reutilizar  

export function AdiosMundo() {
    return (
        <di>
            <h4>
                Adios Ing.
            </h4>
        </di>
    )
}