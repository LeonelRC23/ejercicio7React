import React from "react";
import "../style/empleadoAvatar.css";

const EmpleadoAvatar = ({objetoEmpleado}) => {
  return (
    <div id="contenedorImg">
      <img src={objetoEmpleado.pic} alt="avatar" className="img-fluid"/>
    </div>
  );
};

export default EmpleadoAvatar;
