import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css';
import { createBuyOrder } from '../../services/firestore';

export default function Cart() {
  const { cart, clearCart, totalPrecioCart, removerItem } = useContext(CartContext);
  
  

  function handleBuyOrder(){
    const dataOrder = {
      buyer: {
        name: "React 37070",
        phone: 123456,
        email: "react37070@ClipLoader.abc"
      },
      items:cart,
      total: totalPrecioCart()
    }
    createBuyOrder(dataOrder);
    clearCart();
  }
  

  
  
  return (
    <>
      <div className='contenedorItems'>
        {cart.map((item) => (
          <div key={item.id} className='contenedorItem'>
            <div  key={item.id}>
              <h2>
              {item.category} {item.title}
              </h2>    
              <img src={item.imagen} alt='imagen del producto' width='150px' height='150px'></img>     
              <p >
                $ {item.price}
              </p>
              <p>Unidades: {item.cantidad} </p>
              <button onClick={ ()=> removerItem(item.id)} className='botonEliminarItem'>X</button>
              <p>Subtotal: ${item.price * item.cantidad}</p>
            </div>
          </div>
        ))}    
      </div>
      <div className='contenedorBotones'>
        <div>
          <p>Total a pagar: ${totalPrecioCart()}</p>
        </div>
        <button onClick={handleBuyOrder} className='botonFinish'>finalizar compra</button>
        <button className='botonVaciar' onClick={clearCart}>vaciar carrito</button>
      </div>
  </>
  );
}
