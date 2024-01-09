import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";
import "../style/EmpleadoList.css";
import empleados from "../arrays/empleados.js";

const EmpleadoList = () => {
  console.log(empleados.id);
  return (
    <div className="contenedorPrincipal d-flex justify-content-center align-items-center my-5">
      <Card id="cardPrincipal">
        <ListGroup variant="flush">
          {empleados.map((objeto) => (
            <EmpleadoRow key={objeto.id} objetoEmpleado={objeto}/>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default EmpleadoList;
