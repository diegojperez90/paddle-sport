import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  
  return (
    <nav>
      <ul className="nav-list">
        <li >
          <Link className="listaNav" to="/">Inicio</Link>
        </li>
        <li>
          <NavLink className="listaNav" to="/category/Royal">Royal</NavLink>
        </li>
        <li>
          <Link className="listaNav" to="/category/Varlion">Varlion</Link>
        </li>
        <li>
          <Link className="listaNav" to="/category/Babolat">Babolat</Link>
        </li>
      </ul>
    </nav>
  );
}