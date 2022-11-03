import React,{ useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../../../context/CartContext';


function CarritoTabla() {
  const {cartList, eliminarItem, total, limpiarCart, cartLength} = useContext(CartContext)
  
  return (
    <>
      
      <button className='btn' onClick={limpiarCart}>Vaciar el carrito</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>

        {cartLength === 0 ?
        <tbody>
          <tr>
            <td colSpan="5" align='center'>El carrito está vacío</td>
          </tr>
        </tbody>
        :
        <tbody>
          {
            cartList.map(i=>
              <tr key={i.item.id}>
                <td>{i.item.nombre}</td>
                <td align="center">{i.itemQty}</td>
                <td align="center">${i.itemQty*i.item.precio}</td>
                <td align="center" onClick={()=>eliminarItem(i)}>{'\u2715'}</td>
              </tr>
              )
          }
          
        </tbody>
        }
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${total()}</td>
          </tr>
        </tfoot>
      </Table>
    </>
    
  );
}

export default CarritoTabla;