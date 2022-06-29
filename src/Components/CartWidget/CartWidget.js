import "./CartWidget.css";
import ImgCarro from "../../assets/cart.jpg"

export default function CartWidget() {
  return (
    <a href="/cart">
      <img className="carritoCompras" alt="logo del carrito de compras" src={ ImgCarro }/>
    </a>
  )
}
