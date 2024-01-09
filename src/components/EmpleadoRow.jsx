import React from "react";
import { ListGroupItem } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
import "../style/empleadoRow.css"

const EmpleadoRow = () => {
  return (
    <ListGroupItem className="d-flex">
      <EmpleadoAvatar />
      <div className="mx-3">
          <p id="nombre">Gerardo de Rivia</p>
        <div className="d-flex caracteristicas">
          <p>CEO</p>
          <p id="puesto">Business</p>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default EmpleadoRow;
