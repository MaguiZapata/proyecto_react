import React from 'react'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import './Item.css'
<item className="css"></item>
function Item(props) {
  const{item}=props
  return (
  
    <Card className= 'tarjeta'>
        <Card.Img variant="top" src={item.imgsrc} />
        <Card.Body>
          <Card.Title className="cardTitle" >{item.nombre}</Card.Title>
          <Card.Text className="txtPrecio" >
            ${item.precio}
          </Card.Text>
          <button className='btn'><NavLink to={`/items/${item.id} `}>VER DETALLE</NavLink></button>
        </Card.Body>
      </Card>
  


  )
}

export default Item