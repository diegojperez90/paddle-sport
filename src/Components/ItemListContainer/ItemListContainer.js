import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { productos } from "../../Products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"


export default function ItemListContainer({ greeting, subtitulo }) {
  const [products, setProducts] = useState([]);
  const { marca } = useParams();

  useEffect(()=>{
    const getProducts = new Promise((resolve, reject) => {
      const nuevoArray =   productos.filter(elem => elem.category === marca);
      setTimeout(() => {
        resolve(
          productos
        )
      }, 2000);
    });
    getProducts
    .then((res)=>{
      setProducts(res);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

  return (
    <div className="saludoInicial">
      <h2>
      {greeting}
      </h2>
      <p>
        {subtitulo}
      </p>
      <ItemCount stock={5} initial={1}/>
      <ItemList items={products} />
    </div>
  )
}
