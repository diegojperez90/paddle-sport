import "./CartWidget.css";
import ImgCarro from "../../assets/cart.jpg"

export default function CartWidget() {
  return (
    <a href="/">
      <img className="carritoCompras" src={ ImgCarro }/>
    </a>
  )
}
