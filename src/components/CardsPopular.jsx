import { FaHeart } from "react-icons/fa";
import styled from '@emotion/styled'
import Rating from './Rating'
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import comida1 from "../assets/comida1.png";
import comida2 from "../assets/comida2.png";
import comida3 from "../assets/comida3.png";
import comida4 from "../assets/comida4.png";
import comida5 from "../assets/comida5.png";
import comida6 from "../assets/comida6.png";
import comida7 from "../assets/comida7.png";
import comida8 from "../assets/comida8.png";
import fondo from "../assets/fondo.png";

// Estilos
export const Contenedor = styled.section`
  background-color: #fafafa;

&.cajascontent{
  background-color:white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 250px;

  @media (max-width: 768px) {
    flex-direction: column; /* Cambiar a diseño de columna para pantallas más pequeñas */
      align-items: center; /* Centrar elementos */
      margin: 10px; /* Cambiar margen */
  }
}
`;

export const Cartas = styled.div`
background-color:#eeeeee;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  padding: 10px;
  flex: 1;
  margin: 10px;
  flex-grow: 1;
  flex-basis: 0;
  margin-left: 20px;
  border-radius: 16px;

  &:hover {
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    margin: 5px; /* Cambiar el margen para pantallas más pequeñas */  }
`;

export const Images = styled.img`
  width: 274px;
  height: 224px;
  padding: 5px;
  transition: transform 0.2s, box-shadow 0.2s; /* Agrega una transición suave */

  &:hover:not(.ultimo) {
    transform: scale(1.1);
  }

  &.ultimo {
    align-items: center;
    width: 90%;
    height: 90%;
    padding-left: 70px;
  }
`;

export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tit = styled.h3`
  font-family: "Segoe UI";
  color: grey;
  margin: 0;

  &.verde {
    font-family: var(--satisfy-font);
    color: green;
    text-align: center;
    font-size: 2rem;
  }
  &.Tnegro {
    color: black;
    text-align: center;

  }
`;

export const Precio = styled.div`
  display: flex;
  align-items: center;
`;

export const Cont = styled.p`
  font-size: 1.5rem;
  line-height: 1;
  margin: 0;
`;

export const Descuento = styled.p`
  font-size: 0.8rem;
  text-decoration: line-through;
  margin-left: 5px;
  color: #494949; /* Color del descuento */
`;

export const Boton = styled.button`
  text-transform: none;
  height: 42px;
  font-size: 1.2rem;
  padding: 4px 11px;
  background-color: #e67205;
  border-color: #e67205;
  color: #fff;
  border-radius: 16px;
  margin-left: 11px;
  margin-right: 24px;
  &:hover {
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.5);
    background-color: #373636;
  }
`;

export const Content = styled.span`
  color: white;
`;

//corazon
const Corazon = styled(FaHeart)`
align-items: self-end

  // Otros estilos CSS
`;

// Componente


const comidas = [
  { id: 1, nombre: "Hamburguesa", precio: 50, imagen: comida1 },
  { id: 2, nombre: "pizza", precio:50, imagen: comida2},
  {id: 3, nombre: "rara", precio:50, imagen: comida3},
  {id: 4, nombre: "comida", precio:50, imagen: comida4},
  {id: 5, nombre: "comida", precio: 50, imagen: comida5}, 
  {id: 6, nombre: "comida", precio:50, imagen: comida6},
  {id: 7, nombre: "comida", precio:50, imagen: comida7},
  {id: 8, nombre: "comida", precio:50, imagen: comida8}


];
function CardsPopular() {

  const [heartColor, setHeartColor] = useState("initial");

  const handleHeartClick = () => {
    if (heartColor === "initial") {
      setHeartColor("red");
    } else {
      setHeartColor("initial");
    }
  };
  return (
    <Contenedor className="cajas">
      <Tit className="verde">Popular food</Tit>
      <Tit className="Tnegro">Our Special Dishes</Tit>
      <Contenedor className="cajascontent">
        {comidas.map((comida) => (
          <Cartas key={comida.id}>
            <Corazon
              onClick={handleHeartClick}
              color={heartColor}
            />
            <Images src={comida.imagen} alt={comida.nombre} className="imagenes" />

            <Textos>
              <Tit>{comida.nombre}</Tit>
              <Rating />
              <Precio>
                <Cont>s/{comida.precio}</Cont>
                <Descuento className="descuento">s/{comida.precio}</Descuento>
              </Precio>

              <Boton src="#">
                <Content>Añadir a la carta</Content>
              </Boton>
            </Textos>
          </Cartas>
        ))}
      </Contenedor>
      <Images img src={fondo} className="ultimo"></Images>
    </Contenedor>
  );
}

export default CardsPopular;
