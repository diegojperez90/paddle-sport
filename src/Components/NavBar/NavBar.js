import "./NavBar.css";
import { Link } from 'react-router-dom'

export default function NavBar() {
  
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="listaNav">
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/Royal">Royal</Link>
        </li>
        <li>
          <Link to="/category/Varlion">Varlion</Link>
        </li>
        <li>
          <Link to="/category/Babolat">Babolat</Link>
        </li>
      </ul>
    </nav>
  );
}