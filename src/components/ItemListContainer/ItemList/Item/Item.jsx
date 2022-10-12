import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import './item.css'
<item className="css"></item>
function Item(props) {
  const{item}=props
  return (
  
    <Card style={{ width: '18rem' }} className= 'tarjeta'>
        <Card.Img variant="top" src={item.img_src} />
        <Card.Body>
          <Card.Title className="cardTitle" >{item.nombre}</Card.Title>
          
          <Card.Text className="txtPrecio" >
            ${item.precio}
          </Card.Text>
          <Button variant="primary"><NavLink to={`/items/${item.id} `} className='txtbtnDetalle' >VER DETALLE</NavLink></Button>
        </Card.Body>
      </Card>
  


  )
}

export default Item