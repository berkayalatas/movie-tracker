import React from "react";
import "../form.css";
import { Container, Row, Col } from "react-bootstrap";



export const Contact = (props) => {
  return (
    <>
      <h3> CONTACT </h3>
      <Container fluid>
        <Row className="d-flex flex-row">
          <Col lg={8}>
            <div class="contact-us">
              <form method="POST" data-netlify="true">
                <label for="customerName">
                  NAME <em>&#x2a;</em>
                </label>
                <input
                  id="customerName"
                  name="customerName"
                  required
                  type="text"
                />
                <label for="customerEmail">
                  EMAIL <em>&#x2a;</em>
                </label>
                <input
                  id="customerEmail"
                  name="customerEmail"
                  required
                  type="email"
                />
                <label for="customerNote">
                  YOUR MESSAGE <em>&#x2a;</em>
                </label>
                <textarea
                  id="customerNote"
                  name="customerNote"
                  required
                  rows="4"
                ></textarea>
                <div className="text-center">
                  <button id="customerOrder" type="submit"
                    onClick={ (event)=> {
                        event.preventDefault();
                    }}
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <div className="logo_container ">
              <a href="mailto:berkay.3304@gmail.com">
                <img
                  src="https://img.icons8.com/doodle/70/000000/email--v1.png"
                  alt="Email logo"
                />
              </a>

              <a href="https://www.linkedin.com/in/berkayalatas/">
                <img
                  src="https://img.icons8.com/doodle/70/000000/linkedin--v2.png"
                  alt="linkedin logo"
                />
              </a>

              <a href="https://github.com/berkayalatas">
                <img
                  src="https://img.icons8.com/fluent/70/000000/github.png"
                  alt="Github logo"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
