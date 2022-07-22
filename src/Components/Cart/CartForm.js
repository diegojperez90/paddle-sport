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
      <label className='label' htmlFor='username'>Usuario</label> 
      <input className='input' onChange={handleChange} name='username'/>

      <label className='label' htmlFor='phone'>Telefono</label>
      <input className='input' onChange={handleChange} name='phone'/>

      <label className='label' htmlFor='email'>Email</label>
      <input className='input' onChange={handleChange} name='email'/>
    </form>
  )
}

