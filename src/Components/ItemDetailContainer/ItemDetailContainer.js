import { useState, useEffect } from "react";
import { productos } from "../../Products";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

export default function ItemDetailContainer({ greeting }) {
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos[2])
      }, 600);
    });
    getProduct
    .then((res)=>{
      setProduct(res);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

  return (
    <div className="detalleProducto">
      <h2>
      {greeting}
      </h2>
      <ItemDetail item={ product }/>
    </div>
  )
}

