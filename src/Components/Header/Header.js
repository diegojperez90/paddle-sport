import "./Header.css";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <header className="header">
      <img className="logoPrincipal" src="../../assets/logoPrincipal.webp"/>
      <NavBar/>
    </header>
  );
}