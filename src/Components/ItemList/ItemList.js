import Item from "../Item/Item";

export default function ItemList({ items }) {
  return (
    <div>
      { items.map((prod)=>(
        <Item key={prod.id} title = {prod.title} category = {prod.category} imagen = {prod.imagen}/>
      ))}
    </div>
  )
}