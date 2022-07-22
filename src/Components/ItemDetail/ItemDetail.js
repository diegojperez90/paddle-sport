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
      <div>
        <img  src = {item.imagen} alt={item.title} className='imagenPaleta'/>
      </div>
      <div className="contenedorTitle">
        <h1 className="tituloItemDetail"> {item.category} {item.title}</h1>
        <p className="descripcionItem"> {item.description}</p>
        <span>$ {item.price}</span> 
        <br></br>
        {isAddedToCart 
          ? <Link to="/cart" className="botonInCart">Ir al carrito</Link>
          : <ItemCount className='contador' onAdd={handleOnAdd} stock={5} initial={1}/>
        }
        {isInCartContext(item.id) && (
        <button onClick={ ()=> removerItem(item.id)} className="botonRemoverCart">Remover del carrito</button>
      )}
      </div>
    </div>
  )
}
