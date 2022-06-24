export default function ItemDetail({ item }) {
  console.log('ITEMMM', item)
  return (
    <div>
      <h1> {item.title} </h1>
      <h2> {item.category} </h2>
      <p> {item.description}</p>
      <img  src = {item.imagen} alt={item.title} width="400"/>
      <br></br>
      <span>$ {item.price}</span>
    </div>
  )
}
