import "./ContainerCards.css";
import ItemCount from "../ItemCount/ItemCount";

export default function ContainerCards({ greeting, subtitulo }) {

  return (
    <div className="saludoInicial">
      <h2>
      {greeting}
      </h2>
      <p>
        {subtitulo}
      </p>
      <ItemCount stock={5} initial={1}/>
    </div>
  )
}
