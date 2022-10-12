import React from 'react'
//import CartWidget from './CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

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
            <Nav.Link ><NavLink to = "/"> HOME</NavLink></Nav.Link>
            <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
              <NavDropdown.Item ><NavLink to= "/categorias/carteras"> CARTERAS</NavLink></NavDropdown.Item>
              <NavDropdown.Item > <NavLink to= "/categorias/bijou">
                BIJOU</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to ="/categorias/accesorios"> ACCESORIOS</NavLink></NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link className='about' ><NavLink to = "/about"> ABOUT US </NavLink> </Nav.Link>
            <Nav.Link ><NavLink to = "/contacto"> CONTACTO</NavLink></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
<CartWidget/>
    </Navbar>
    
)
}

export default NavBar


