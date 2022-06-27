import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item }) {
  const [isAddedToCart, setAddedToCart] = useState(false)
  function handleOnAdd() {
    console.log('haciendo handler on add');
    setAddedToCart(true)
  }
  return (
    <div>
      <h1> {item.title} </h1>
      <h2> {item.category} </h2>
      <p> {item.description}</p>
      <img  src = {item.imagen} alt={item.title} width="400"/>
      <br></br>
      <span>$ {item.price}</span>

      {isAddedToCart 
      ? <Link to="/cart">Ir al carrito (terminar la compra)</Link>
      : <ItemCount onAdd={handleOnAdd} stock={5} initial={1}/>
      }
      
    </div>
  )
}
