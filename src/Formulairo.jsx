import React, { useEffect, useState } from "react";
import {Form , Button} from "react-bootstrap"

const Formulairo = () => {
    const [data,setData] = useState(
    {
        nombre:'',
        email:''
    })
    const handleOnChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }
    useEffect(() => {
        console.log('ComponentDidMount')
        return ()=>{ console.log('ComponentUpdating')}
    },[data.nombre])

  return (
    <div>
      <Form>
          <h1>Formulario</h1>
        <Form.Group className="mb-3" controlId="formulario">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese email" value={data.email} onChange={handleOnChange} name='email'/>
        </Form.Group>  
        <Form.Group className="mb-3" controlId="formulario">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" value={data.nombre} onChange={handleOnChange} name='nombre'/>
        </Form.Group>   
        <Button variant="primary">Enviar</Button>
      </Form>
    </div>
  );
};

export default Formulairo;
