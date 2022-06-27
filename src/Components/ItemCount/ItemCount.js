import { useState } from 'react';
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd}) {
  const [ cantidad, setCantidad] = useState(initial);

  const suma = () => {
    if (cantidad < stock) {
      
      setCantidad (cantidad +1);
    } else {
      alert('no hay mas stock del prodcuto')
    }
  }

  const resta = () => {
    if ( cantidad > 1) {
      setCantidad (cantidad - 1);
    } 
  }

  return (
    <div className='contenedorContador'>
      <button onClick={resta}>-</button>
      <span> {cantidad} </span>
      <button onClick={suma}>+</button>
      <button onClick={onAdd}>AGREGAR AL CARRITO</button>
    </div>
  )
}
