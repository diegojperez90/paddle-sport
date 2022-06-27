import "./ItemListContainer.css"

import { useState, useEffect } from "react";
import { productos } from "../../Products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"


export default function ItemListContainer({ greeting, subtitulo }) {
  const [products, setProducts] = useState([]);
  const { marca } = useParams();
  
  useEffect(()=>{
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          marca 
            ? productos.filter(elem => elem.category === marca) 
            : productos 
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
  }, [marca]);

  return (
    <div className="saludoInicial">
      <h2>
      {greeting}
      </h2>
      <p>
        {subtitulo}
      </p>
      
      <ItemList items={products} />
    </div>
  )
}
