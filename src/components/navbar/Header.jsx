import React from "react";
import { Link } from "react-router-dom";
import logo from "../../lib/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  const brandStyle = {
    fontSize: 25,
    fontWeight: 700,
    textDecoration: "none",
  };
  const navItems = {
    fontSize: 18,
    textDecoration: "none",
    fontWeight: 600,
  };

  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      style={{
        background:
          "linear-gradient(90deg, rgba(156,200,79,1) 0%, rgba(183,187,34,1) 50%, rgba(156,200,79,1) 100%)",
      }}
      variant="dark"
    >
      <Link to="/">
        <img src={logo} width="65" alt="logo" />
      </Link>

      <Navbar.Brand>
        <Link to="/" className="text-dark" style={brandStyle}>
          {" "}
          TRACKER
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link
            to="/playing"
            className="text-dark mx-lg-4 text-center py-1"
            style={navItems}
          >
            Playing
          </Link>

          <Link
            to="/popular"
            className="text-dark mx-lg-4 text-center py-1"
            style={navItems}
          >
            Popular
          </Link>

          <Link
            to="/top-rated"
            className="text-dark mx-lg-4 text-center py-1"
            style={navItems}
          >
            Top Rated
          </Link>

          <Link
            to="/contact"
            className="text-dark  text-center py-1"
            style={navItems}
          >
            Contact
          </Link>
        </Nav>

        <Nav>
          <Link
            className="text-dark py-1 text-center"
            to="/watched"
            style={navItems}
          >
            Watched
          </Link>

          <Link
            to="/wishlist"
            className="text-dark mx-lg-4 py-1 text-center"
            style={navItems}
          >
            Wishlist
          </Link>

          <Link to="/add" id="addMovieButton" className="text-center">
            <i className="fas fa-plus-circle mr-1"></i>Add Movie
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
