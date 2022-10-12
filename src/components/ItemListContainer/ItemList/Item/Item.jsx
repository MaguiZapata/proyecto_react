import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Item(props) {
const{item}=props
  return (
  
    
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img_src} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          {item.descripcion}
        </Card.Text>
        <Card.Text>
          ${item.precio}
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>



  )
}

export default Item