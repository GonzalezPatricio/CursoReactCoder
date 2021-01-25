import React from 'react';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.css';
import logo from './logoChio2.png';
import CartWidget from './carrito-de-compras.png';
;
export const NavBar = () => {

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="home"><img src={logo} alt='Chio' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="action/3.1">Anillos</NavDropdown.Item>
              <NavDropdown.Item href="action/3.2">Pulseras</NavDropdown.Item>
              <NavDropdown.Item href="action/3.3">Gorras</NavDropdown.Item>
              <NavDropdown.Item href="action/3.4">Ofertas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="mdpagos">Medios de Pago</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link eventKey={2}>
              <img src={CartWidget} alt='compra' className="carronav"/>Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
}