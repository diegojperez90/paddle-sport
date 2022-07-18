import "./CartWidget.css";
import React ,{ useContext } from "react";
import ImgCarro from "../../assets/cart.jpg";
import CartContext from "../../context/CartContext";
import  { Link } from "react-router-dom";

export default function CartWidget() {
  const { qntyInCart } = useContext(CartContext);

  return (
    <Link to="/cart" className="contenedorCartWidget">
      <img className="carritoCompras" alt="logo del carrito de compras" src={ ImgCarro }/>
      {qntyInCart() !== 0
        ? <span className="contadorCarrito">{qntyInCart()}</span>
        : null
      }
    </Link>
  )
}
