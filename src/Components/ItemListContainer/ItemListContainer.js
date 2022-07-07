import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { FadeLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { traerProductos } from "../../services/firestore";



export default function ItemListContainer({ greeting, subtitulo }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const { marca } = useParams();

  useEffect(()=>{
    
    traerProductos()
    .then((res)=>{
      setProducts(res);
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [marca]);

  return (
    <div className="saludoInicial">
      <h2>
      {greeting}
      </h2>
      <p>
        {subtitulo}
      </p>
      {loading 
        ? <FadeLoader color="blue" className="spinner"/>
        : <ItemList items={products} />
      }
    </div>
  )
}
