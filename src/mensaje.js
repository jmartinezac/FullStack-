import React from "react";

function mensaje(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.message}</h1>
    </div>
  );
}

export default mensaje;
