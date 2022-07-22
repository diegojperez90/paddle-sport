import { Link } from 'react-router-dom';
import './Item.css'

export default function Item({title, category, imagen, id}) {

  return (
    <div className="cajaItem">
      <h3 className='tituloItem'>{ title }</h3>
      <h4 className='categoriaItem'>{ category }</h4>
      <img className='imagenPaleta' src = {imagen} alt={title}/>
      
      <Link to={`/${id}`}>
        <button className='botonDetalle'>ver detalle</button>
      </Link>
    </div>
  )
}
