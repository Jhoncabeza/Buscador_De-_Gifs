import Button from 'react-bootstrap/Button';
import React from 'react'
import useCounter from "./CounterCustomHook"

const Counter = () => {

    const {counter,handleSumar,handleReset,handleRestar} = useCounter()
    
    const mostrarDatos = (...datos) => {
        console.log(datos);
    }

    mostrarDatos('h','h','h','hola')
    return (
        <div>
            <h1>{counter}</h1>
            <Button variant="primary" onClick={handleSumar}>Sumar</Button>
            <Button variant="warning" onClick={handleReset}>Reset</Button>
            <Button variant="primary" onClick={handleRestar}>Restar</Button>
        </div>
    )
}

export default Counter
