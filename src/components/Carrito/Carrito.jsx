import React from 'react';
import CarritoFormulario from './CarritoFormulario/CarritoFormulario';
import CarritoTabla from './CarritoTabla/CarritoTabla'
import './Carrito.css'
function Carrito() {
  return (
    <div className='carrito'>
      <h2>Carrito</h2>
      <CarritoTabla/>
      <h3>Completá con tus datos para recibir la entrega</h3>
      <CarritoFormulario/>
    </div>
  )
}

export default Carrito