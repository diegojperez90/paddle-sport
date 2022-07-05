import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css'

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  console.log('borrando carrito', cart)
  
  return (
    <>
      <div className='contenedorItems'>
        {cart.map((item) => (
          <div key={item.id} className='contenedorItem'>
            <div  key={item.id}>
              <h2>
              {item.category}
              </h2>
              <h3 >
                {item.title}
              </h3>     
              <img src={item.imagen} alt='imagen del producto' width='120px' height='120px'></img>     
              <p >
                $ {item.price}
              </p>
              <p>Cantidad de unidades: {item.cantidad} </p>
              <button className='botonEliminarItem'>X</button>
            </div>
          </div>
        ))}    
      </div>
      <div className='contenedorBotones'>
          <button className='botonFinish'>finalizar compra</button>
          <button className='botonVaciar' onClick={clearCart}>vaciar carrito</button>
      </div>
  </>
  );
}
