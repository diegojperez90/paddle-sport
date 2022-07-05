import "./CartWidget.css";
import React ,{ useContext } from "react";
import ImgCarro from "../../assets/cart.jpg";
import CartContext from "../../context/CartContext";

export default function CartWidget() {
  const { qntyInCart } = useContext(CartContext);
  return (
    <a href="/cart" className="contenedorCartWidget">
      <img className="carritoCompras" alt="logo del carrito de compras" src={ ImgCarro }/>
      <span className="contadorCarrito">{qntyInCart()}</span>
    </a>
  )
}
