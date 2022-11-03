import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import './CartWidget.css'
function CartWidget() {
  const {cartLength} = useContext(CartContext)
  return (
    <div className="cart-widget">
      <NavLink to = "/cart">
        <img className='cart_logo' src="./cart_log1.png" alt="" />
        <span className='counter'>{cartLength}</span>
      </NavLink>
    </div>
  )
}

export default CartWidget