import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";
import "../style/EmpleadoList.css";

const EmpleadoList = () => {
  return (
    <div className="contenedorPrincipal d-flex justify-content-center align-items-center my-5">
      <Card id="cardPrincipal">
        <ListGroup variant="flush">
          <EmpleadoRow />
        </ListGroup>
      </Card>
    </div>
  );
};

export default EmpleadoList;
