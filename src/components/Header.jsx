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
    <Navbar collapseOnSelect expand="lg"
      style={{ background: "rgb(156,200,79)",
        background: "linear-gradient(90deg, rgba(156,200,79,1) 0%, rgba(183,187,34,1) 50%, rgba(156,200,79,1) 100%)" }}
    variant="dark">
      <Link to="/">
         <img src={logo} width="65" alt="logo" />
      </Link>  
      

      <Navbar.Brand>
        <Link to="/" className="text-dark" style={brandStyle}> TRACKER</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="mx-lg-4">
            <Link to="/" className="text-dark p-2" style={navItems}>
              Home
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/contact" className="text-dark  p-2" style={navItems}>
              Contact
            </Link>
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link>
            <Link className="text-dark p-2" to="/watched" style={navItems}>
              Watched
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/wishlist" className="text-dark mx-lg-4 p-2" style={navItems}>
              Wishlist
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/add" id="addMovieButton">
            <i className="fas fa-plus-circle mr-1"></i>Add Movie
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
