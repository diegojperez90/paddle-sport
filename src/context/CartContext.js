import React, {createContext, useState} from 'react';

const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([])

  function addItem (item, cantidad) {
    let productosAgregados = [...cart, {...item, cantidad}];
    setCart(productosAgregados)
  }

  function isInCart(id){
    return cart.some((item)=>item.id === id)
  }

  function clearCart() {
    setCart([]);
};

  return (
    <CartContext.Provider value={ { cart, addItem, isInCart, clearCart } }>
      {props.children}
    </CartContext.Provider>  
  )
}

export default CartContext;

