import React from "react";
import { Link } from "react-router-dom";
import logo from "../lib/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
    const brandStyle ={
        "fontSize":25 ,
        "fontWeight":700,
        "textDecoration": "none"
    }
    const navItems = {
        "fontSize" : 18,
        "textDecoration": "none",
        "fontWeight":600,
    }

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Link to="/">
         <img src={logo} width="65" alt="logo" />
      </Link>  
      

      <Navbar.Brand>
        <Link to="/" className="text-light" style={brandStyle}> TRACKER</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="mx-lg-4">
            <Link to="/" className="text-dark" style={navItems}>
              Home
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/contact" className="text-dark" style={navItems}>
              Contact
            </Link>
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link>
            <Link className="text-dark" to="/watched" style={navItems}>
              Watched
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/wishlist" className="text-dark mx-lg-4" style={navItems}>
              Wishlist
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/add" id="addMovieButton">
            <i class="fas fa-plus-circle mr-1"></i>Add Movie
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
