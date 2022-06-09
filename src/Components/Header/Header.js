import "./Header.css";
import NavBar from "../NavBar/NavBar";
import CartWidget from "../CartWidget/CartWidget";
import logoPrincipal from "../../assets/logoPadle.png"

export default function Header() {
  return (
    <header className="header">
      <img className="logoPrincipal" src= { logoPrincipal }/>
      <NavBar/>
      <CartWidget/>
    </header>
  );
}