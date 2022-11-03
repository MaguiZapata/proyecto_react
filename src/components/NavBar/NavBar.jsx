import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import "./NavBar.css"

function NavBar() {

  
return (
  <Navbar bg="none" expand="sm">
  <Container className='contenedor'>
    <Navbar.Brand className="logo">
      <NavLink to="/">
        <img src="./logo.png" alt="" />
      </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className='barra-box' id="basic-navbar-nav ">
      <Nav className="barra-nav">
        <NavLink className='txt-barra' to ="/"> HOME</NavLink>
        <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
          <ul>
            <li>
              <NavLink  to="/productos">TODOS LOS PRODUCTOS</NavLink>
            </li>
            <li>
              <NavLink to="/categorias/carteras">CARTERAS</NavLink>
            </li>
            <li>
              <NavLink to= "/categorias/bijou">BIJOU</NavLink>
            </li>
            <li>
              <NavLink to ="/categorias/accesorios">ACCESORIOS</NavLink>
            </li>
          </ul>           
        </NavDropdown>
        <NavLink className='txt-barra' to="/about">ABOUT US</NavLink>
        <NavLink className='txt-barra' to = "/contacto">CONTACTO</NavLink>
        <CartWidget/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
)
}

export default NavBar


