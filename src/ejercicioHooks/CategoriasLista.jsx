import React from "react";
import Cards from "./Cards.jsx";

export const CategoriasLista = ({ categoria }) => {
  return (
    <div>
      {categoria.map((cate, index) => {
        return <Cards className="card" key={index} categoria={cate}/>;
      })}
    </div>
  );
};
