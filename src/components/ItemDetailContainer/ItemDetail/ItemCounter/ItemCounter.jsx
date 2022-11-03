import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './ItemCounter.css'

function ItemCounter(props) {

  const {inicialCantidad, onAdd ,selectedItem,stock}=props
  const [cantidad, setCantidad] = useState(inicialCantidad)
  const [onAddTo, setOnAddTo]=useState(true)
  

  function downQty() {
    if (cantidad>inicialCantidad) {
      setCantidad(cantidad-1)
    }
  }
  function upQty() {
    if (cantidad<stock) {
      setCantidad(cantidad+1)
    }
  }

  return (
    <div className='item-counter'>

      {
      onAddTo?
      <React.Fragment>
        
        <div>
          <span>Items:</span>
          <button className='btn' onClick={downQty} >-</button>
          <label>{cantidad}</label>
          <button className='btn' onClick={upQty}>+</button>
        </div>
        
        <p>Subtotal : ${cantidad*selectedItem.precio}</p>
        <button className='btn' onClick={()=> {onAdd(cantidad) ; setOnAddTo(false)}}>
              Agregar al carrito
        </button>

      </React.Fragment>
      :

      <button className='btn'>
        <NavLink to="/cart">Ir al carrito</NavLink>
      </button>

      }

    </div>



  )
}

export default ItemCounter