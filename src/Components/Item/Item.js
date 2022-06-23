import { Link } from 'react-router-dom';
import './Item.css'

export default function Item({title, category, imagen, id}) {

  return (
    <div className="cajaItem">
      <h3>{ title }</h3>
      <h4>{ category }</h4>
      <img  src = {imagen} alt={title} width="200"/>
      
      <Link to={`/${id}`}>
        <button className='botonDetalle'>ver detalle</button>
      </Link>
    </div>
  )
}
