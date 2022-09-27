import React from 'react'
//import CartWidget from './CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';

import "./NavBar.css"

function NavBar() {

return (
    <Navbar className= "barra-nav" bg="light" expand="lg">
      <Container>
        <div className='logo'>
        <Navbar.Brand href="#home"> <img className = "logo1" src="./logo.png" alt="" /></Navbar.Brand>
        </div>
        <div className='barra'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ajuste_barra">
            <Nav.Link href="#home">HOME</Nav.Link>
            <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CARTERAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                BIJOU
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ACCESORIOS</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#home"className='about' >ABOUT US</Nav.Link>
            <Nav.Link href="#home">CONTACTO</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
<CartWidget/>
    </Navbar>
    
)
}

export default NavBar


