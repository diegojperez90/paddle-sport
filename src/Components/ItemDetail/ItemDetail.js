import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

import CartContext from "../../context/CartContext";


export default function ItemDetail({ item }) {
  const [isAddedToCart, setAddedToCart] = useState(false);

  const { addItem, removerItem, isInCartContext } = useContext(CartContext);

  function handleOnAdd(cantidad) {
    addItem( item, cantidad );
    setAddedToCart(true)
  }
  return (
    <div className="contenedorDetalleProducto">
      <h1> {item.title} </h1>
      <h2> {item.category} </h2>
      <p> {item.description}</p>
      <img  src = {item.imagen} alt={item.title} width="300"/>
      <br></br>
      <span>$ {item.price}</span>
      
      {isAddedToCart 
      ? <Link to="/cart" className="botonInCart">Ir al carrito</Link>
      : <ItemCount onAdd={handleOnAdd} stock={5} initial={1}/>
      }

      {isInCartContext(item.id) && (
        <button onClick={ ()=> removerItem(item.id)} className="botonRemoverCart">Remover del carrito</button>
      )}
    </div>
  )
}
