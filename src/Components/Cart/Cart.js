import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'

export default function Cart() {
  const { cart } = useContext(CartContext);
  console.log('borrando carrito', cart)
  
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} >
          <div  key={item.id}>
            <h2>
            {item.category}
            </h2>
            <h3 >
              {item.title}
            </h3>          
            <p >
              $ {item.price}
            </p>
            <p>Cantidad de unidades: {item.cantidad} </p>
            <button >borrar X</button>
          </div>
        </div>
      ))}    
    </div>
  )
}
