import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import  FadeLoader  from "react-spinners/FadeLoader";
import { traerUnProducto } from "../../services/firestore";

export default function ItemDetailContainer({ greeting }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } =  useParams();
  
  useEffect(()=>{

    traerUnProducto(id)
    .then((res)=>{
      setProduct(res);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [id]);

  return (
    <div className="detalleProducto">
      <h2>
      {greeting}
      </h2>
      {loading 
        ? <FadeLoader color='blue'/>
        : <ItemDetail item={ product }/>
      }
    </div>
  )
}

