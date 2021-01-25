import React from "react";
import Button from 'react-bootstrap/Button';


export const Count = ({ min, max, onAdd, count, resetClick }) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginLeft: "35%" }}>
        <Button variant="secondary" onClick={min}> - </Button>
        <p style={{padding:"10px", textAlign:"center"}}>{count}</p>
        <Button variant="secondary" onClick={max}> + </Button>
      </div>
      <Button variant="dark" disabled={count === 0} onClick={onAdd}>
        {" "}
        Agregar: {count}{" "}
      </Button>
      <Button variant="danger" onClick={resetClick}>Vaciar Carro</Button>
    </>
  );

};