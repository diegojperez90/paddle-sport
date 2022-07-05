import React, {createContext, useState} from 'react';

const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([])

  function addItem (item, cantidad) {
    if (isInCartContext(item.id)){
      let itemToAdd = cart.find( i => i.id === item.id);
      itemToAdd.cantidad += cantidad;

      let newCart =  cart.filter( i => i.id !== item.id);
      setCart([...newCart, {...itemToAdd}]);

    } else {
      let productosAgregados = [...cart, {...item, cantidad}];
      setCart(productosAgregados)
    }
  }

  function removerItem(id){
    let newCart =  cart.filter( item => item.id !== id);
    setCart(newCart)
  }

  function isInCartContext(id){
    return cart.some((item)=>item.id === id)
  }

  function qntyInCart(){
    let total = 0;
    cart.forEach( item => total = total + item.cantidad );
    return total;
  }

  function totalPrecioCart(){
    let total = 0;
    cart.forEach( item => total = total + (item.cantidad * item.price));
    return total;
  }

  function clearCart() {
    setCart([]);
};

  return (
    <CartContext.Provider value={ { cart, addItem, isInCartContext, qntyInCart , totalPrecioCart ,clearCart, removerItem } }>
      {props.children}
    </CartContext.Provider>  
  )
}

export default CartContext;

