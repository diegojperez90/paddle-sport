import "./ContainerCards.css"

export default function ContainerCards({ greeting, subtitulo }) {

  return (
    <div className="saludoInicial">
      <h2>
      {greeting}
      </h2>
      <p>
        {subtitulo}
      </p>
    </div>
  )
}
