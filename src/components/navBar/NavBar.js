import React from 'react';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.css';
import logo from './logoChio2.png';
import CartWidget from './carrito-de-compras.png';
import {Link} from 'react-router-dom';

export const NavBar = () => {

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to={`/`}>
        <Navbar.Brand href="Home"><img src={logo} alt='Chio' /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item id="Aritos">Aritos</NavDropdown.Item>
              <NavDropdown.Item id="Billeteras">Billeteras</NavDropdown.Item>
              <NavDropdown.Item id="Gorras">Gorras</NavDropdown.Item>
            </NavDropdown>
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