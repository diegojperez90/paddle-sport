import React, { useContext} from 'react';
import './CartForm.css';
import CartContext from '../../context/CartContext';

export default function CartForm() {
  const {datosComprador} = useContext(CartContext)

  const handleChange = (evt) => {
    evt.preventDefault();
    const field = evt.target.name;
    const value = evt.target.value;
    
    datosComprador(field, value);
    console.log('datos: ', field, value)
  }

  return (
    <form className='contenedorForm'>
      <label htmlFor='username'>Usuario</label>
      <input onChange={handleChange} name='username'/>

      <label htmlFor='phone'>Telefono</label>
      <input onChange={handleChange} name='phone'/>

      <label htmlFor='email'>Email</label>
      <input onChange={handleChange} name='email'/>
    </form>
  )
}

