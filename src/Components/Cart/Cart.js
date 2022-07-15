import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './Cart.css';
import { createBuyOrder } from '../../services/firestore';
import CartForm from './CartForm';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {
  const { cart, clearCart, totalPrecioCart, removerItem, buyer  } = useContext(CartContext);
  
  

  function handleBuyOrder(){
    const dataOrder = {
      buyer: buyer,
      items:cart,
      total: totalPrecioCart()
    }

    cart.length > 0 && buyer.username.length > 0 && buyer.phone.length > 0 && buyer.email.length >0 && createBuyOrder(dataOrder).then( (orderCreated) =>{

      toast.info( dataOrder.buyer.username + ' acabas de comprar: ' + dataOrder.items.map(tt => {
        return tt.cantidad + ' ' +  tt.title + ' ' +  tt.category
      }) + '. Total a pagar: $' + totalPrecioCart() + `. Se enviará un email con la factura a ${dataOrder.buyer.email}` , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c92d)',
          minHeight: '100px',
          minWidth: '100px',
          fontSize: '20px',
          border: 'ligth'
      }
        });

      clearCart();
      console.log(orderCreated.id);
    });
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
      <CartForm/>
      <div className='contenedorBotones'>
        <div>
          <p>Total a pagar: ${totalPrecioCart()}</p>
        </div>
        
        <button onClick={handleBuyOrder} className='botonFinish'>finalizar compra</button>
        <button className='botonVaciar' onClick={clearCart}>vaciar carrito</button>
      </div>
      <ToastContainer/>
  </>
  );
}