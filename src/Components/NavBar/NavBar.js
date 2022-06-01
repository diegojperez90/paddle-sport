import NavLink from "../NavLink/NavLink";
import "./NavBar.css";

export default function NavBar() {
  function handleClick (){
    console.log("click nav");
  }

  return (
    <nav className="nav">
      <ul className="nav-list">
        <NavLink handleOnClick = {handleClick} title="Paletas"/>
        <NavLink handleOnClick = {handleClick} title="Zapatillas"/>
        <NavLink handleOnClick = {handleClick} title="Accesorios"/>
        <NavLink handleOnClick = {handleClick} title="Contacto"/>
      </ul>
    </nav>
  );
}