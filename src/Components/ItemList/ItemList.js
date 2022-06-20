import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList({ items }) {
  return (
    <div className="item">
      { items.map((prod)=>(
        <Item key={prod.id} title = {prod.title} category = {prod.category} imagen = {prod.imagen}/>
      ))}
    </div>
  )
}