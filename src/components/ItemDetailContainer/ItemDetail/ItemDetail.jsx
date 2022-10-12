import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemDetail(props) {
  const {product} = props
 
  return (
    <div className='divDetalle' >
    <Card style={{ width: '18rem' }} className= 'tarjeta'>
        <Card.Img variant="top" src={product.img_src} />
        <Card.Body>
          <Card.Title className="cardTitle">{product.nombre}</Card.Title>
          <Card.Text className="cardTxt">
            {product.descripcion}
          </Card.Text>
          <Card.Text className="txtPrecio">
            ${product.precio}
          </Card.Text>
          <Button variant="primary" >
            <div className='txtbtnDetalle'>
            AGREGAR AL CARRITO</div></Button>
        </Card.Body>
      </Card>
      </div>

  )
}

export default ItemDetail