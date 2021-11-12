import React,{useState}from "react";
import styled from "styled-components";
import CategoriasAdd from "./CategoriasAdd";
import { CategoriasLista } from "./CategoriasLista";

const H1 = styled.h1`
  text-align: center;
  color: #F0E9D2;
`
const CategoriasApp = () => {
  const [categorias, setCategorias] = useState([]);

  return (
    <div>
      <H1>BUSCA TU GIF</H1>
      <CategoriasAdd setCategorias={setCategorias}/>
      <CategoriasLista categoria={categorias}/>
    </div>
  );
};

export default CategoriasApp;