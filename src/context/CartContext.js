import React, {createContext, useState} from 'react';

const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([])

  function addItem (item, cantidad) {
    let productosAgregados = [...cart, {...item, cantidad}];
    setCart(productosAgregados)
  }

  function isInCartContext(id){
    return cart.some((item)=>item.id === id)
  }

  function qntyInCart(){
    let total = 0;
    cart.forEach( item => total = total + item.cantidad );
    return total;
  }

  function clearCart() {
    setCart([]);
};

  return (
    <CartContext.Provider value={ { cart, addItem, isInCartContext, qntyInCart ,clearCart } }>
      {props.children}
    </CartContext.Provider>  
  )
}

export default CartContext;

