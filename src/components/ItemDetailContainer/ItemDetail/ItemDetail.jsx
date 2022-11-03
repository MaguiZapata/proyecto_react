import React, {useState,useContext} from 'react'
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../../context/CartContext';
import ItemCounter from './ItemCounter/ItemCounter';
import './ItemDetail.css'

function ItemDetail(props) {
  
  const {product} = props
  const [cantidad,setCantidad]=useState(1)
  const {guardarItem}= useContext(CartContext)

  const handleCount=(cant)=>{
    setCantidad(cant)
    guardarItem({item: product, itemQty: cant})   
};
  return (
    <div className='divDetalle' style={{display:'flex',justifyContent:'center'}}>
      <Card className= 'tarjeta'>
          <Card.Img variant="top" src={product.imgsrc} />
          <Card.Body>
            <Card.Title className="cardTitle">{product.nombre}</Card.Title>
            <Card.Text className="cardTxt">
              {product.descripcion}
            </Card.Text>
            <Card.Text className="txtPrecio">
              ${product.precio}
            </Card.Text>
            <ItemCounter selectedItem={product} stock={product.stock} inicialCantidad={cantidad} onAdd={handleCount} />
          </Card.Body>
      </Card>
    </div>

  )
}

export default ItemDetail