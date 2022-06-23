
import "./NavBar.css";
import { Link } from 'react-router-dom'

export default function NavBar() {
  function handleClick (){
    console.log("click nav");
  }

  return (
    <nav className="nav">
      <ul className="nav-list">
        <Link to="/">Inicio</Link>
        <Link to="/category/Royal">Royal</Link>
        <Link to="/category/Varlion">Varlion</Link>
        <Link to="/category/Babolat">Babolat</Link>

        {/* <NavLink handleOnClick = {handleClick} title="Paletas"/>
        <NavLink handleOnClick = {handleClick} title="Calzado"/>
        <NavLink handleOnClick = {handleClick} title="Accesorios"/>
        <NavLink handleOnClick = {handleClick} title="Contacto"/> */}
      </ul>
    </nav>
  );
}