import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../owl.css";
import { Row, Col, Container } from "react-bootstrap";
import {Link } from 'react-router-dom'
export const Home = (props) => {
  return (
    <div>
      <Container fluid  
      style={{backgroundColor:"#f8f4e5", height:"130vh"}}>
        <Row>
          <Col lg={7}>
            <OwlCarousel
              items={1}
              rewind={true}
              autoplay={true}
              className="owl-theme"
              loop
              nav
            >
              <div>
                <img
                  alt="MovieImage"
                  className="img"
                  src={
                    "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80"
                  }
                />
              </div>
              <div>
                <img
                  alt="MovieImage2"
                  className="img"
                  src={
                    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                  }
                />
              </div>
              <div>
                <img
                  alt="MovieImage3"
                  className="img"
                  src={
                    "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                  }
                />
              </div>
              <div>
                <img
                  alt="MovieImage3"
                  className="img"
                  src={
                    "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  }
                />
              </div>
            </OwlCarousel>
          </Col>
          <Col lg={5} >
            <h1 className="mb-4 text-success my-2">
              <strong> Welcome to Movie Tracker </strong>
            </h1>

            <ul className="my-5" style={{ listStyle: "none" }}>
              <li className="my-4">
                <h4>
                  <i className="fas fa-check mx-3 text-success"></i>
                  Search Any Movie
                </h4>
              </li>
              <li className="my-4">
                <h4>
                  <i className="fas fa-check mx-3 text-success"></i>
                  Keep track of your Movies
                </h4>
              </li>
              <li className="my-4">
                <h4>
                  <i className="fas fa-check mx-3 text-success"></i>
                  Add movie to your
                  <strong> Watched </strong> 
                </h4>
              </li>
              <li className="my-4">
                <h4>
                  <i className="fas fa-check mx-3 text-success"></i>
                  Add movie to your
                  <strong> Wishlist </strong> 
                </h4>
              </li>
            </ul>

            <div className="text-center mt-4">
              <Link to="/add"
                className="btn btn-success mt-4"
                style={{padding:13}}
              >
                Get Started <i className="fas fa-play mx-1"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
