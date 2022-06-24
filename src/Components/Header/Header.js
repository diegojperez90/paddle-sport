import "./Header.css";
import NavBar from "../NavBar/NavBar";
import CartWidget from "../CartWidget/CartWidget";
import logoPrincipal from "../../assets/logoPadle.png"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logoPrincipal" alt="logo del proyecto" src= { logoPrincipal }/>
      </Link>
      <NavBar/>
      <CartWidget/>
    </header>
  );
}