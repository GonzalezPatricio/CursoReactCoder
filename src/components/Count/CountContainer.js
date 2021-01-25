import React, { useState } from "react";
import {Count} from "../Count/Count";

export const CountCountainer = ({ initial, stock }) => {
  const [count, setCount ] = useState(initial);
  const add = () => {
    if (count > stock) {
      alert("Superaste el stock");
    } else {
      setCount(count + 1);
    }
  };

  const sub = () => {
    if (count > 0) setCount(count - 1);
    else alert("Tenes que agregar al menos un item");
  };

  const onAdd = () => {
    alert(`Agregaste ${count} al carrito`);
  };
  
// const resetClick = () => {
//     if (count >0) setCount( count === 0)
//   };

  return (

    <div>
      <Count min={sub} max={add} onAdd={onAdd} resetClick={setCount} count={count} />
    </div>
  );
};