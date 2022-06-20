import { productos } from '../../Products'
import './Item.css'

export default function Item({title, category, imagen, id}) {

  return (
    <div className="cajaItem">
      <h3>{ title }</h3>
      <h4>{ category }</h4>
      <img  src = {imagen} alt={title} width="200"/>
    </div>
  )
}
