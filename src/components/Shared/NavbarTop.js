import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../images/dark_logo.png';
import './NavbarTop.css';

const NavbarTop = () => {
    return (
        <Navbar className='nav-container' collapseOnSelect expand="lg" bg="light" variant="dark">
        <a className="navbar-brand" href="#">
        <img src={logo} alt=""/>
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>about us</Nav.Link>
            <Nav.Link as={Link} to='/service'>services</Nav.Link>
            <Nav.Link as={Link} to='/gallery'>gallery</Nav.Link>
            <Nav.Link as={Link} to='/news'>News</Nav.Link>
            <Nav.Link as={Link} to='/contact'>contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};

export default NavbarTop;