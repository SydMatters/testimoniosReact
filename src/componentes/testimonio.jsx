import React from "react";
import '../stylesheets/testimonio.css';

export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio" id={`${props.name}`}>
      <img 
      src={require(`../assets/testimonio-${props.img}.jpg`)}
      alt={`Imagen de ${props.name}`} 
      className="imagen-testimonio" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.name}</strong> en {props.country}</p>
        <p className="cargo-testimonio">{props.job} en  
          <strong> {props.company}</strong></p>
        <p className="texto-testimonio">"{props.testimony}"</p>
      </div>
    </div>
  );
}

//exportaciones nombradas y por defecto
//Nombrada
//{Testimonio} es una exportación nombrada
//Cuando hago el export lo hago solo con export function Testimonio(){} sin el default

//Por defecto
//export default Testimonio;
//Lo hago al final del archivo con export default Testimonio; sin las llaves
//Luego en el archivo app lo importo con import Testimonio from './componentes/testimonio' sin las llaves
