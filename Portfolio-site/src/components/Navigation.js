import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "../App.css"


function Navigation(){

    return (
      <Navbar className="border-bottom fixed-top" bg="light" expand="lg">
          <Navbar.Brand className="navName">TAM KAI JUN</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">HOME</Link>
              <Link className="nav-link" to="/about">ABOUT</Link>
              <Link className="nav-link" to="/project">PROJECT</Link>
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;