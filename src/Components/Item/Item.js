export default function Item({title, category, imagen}) {

  return (
    <div >
      <h3>{ title }</h3>
      <h4>{ category }</h4>
      <img  src = {imagen} width="200"/>
    </div>
  )
}
