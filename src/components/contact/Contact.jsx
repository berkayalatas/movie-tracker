import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../form.css";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Contact = (props) => {
  const [emailSent, setEmailSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_es7l897",
        "template_1j71v9z",
        e.target,
        "user_5QxnFjF9fjdqCMAYK0gki"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setEmailSent(!emailSent);
  }

  return (
    <div  style={{backgroundColor:"#f8f4e5", height:"110vh"}}>
      <h3 style={{marginTop:-1}}> CONTACT </h3>
      <Container fluid>
        <Row className="d-flex flex-row">
          <Col lg={8}>
            {emailSent && (
              <Alert variant="success" className="ml-5">
                We received your message. We will contact you soon.
              </Alert>
            )}
            <div className="contact-us">
              <form onSubmit={sendEmail} id="contact-form">
                <label>
                  NAME <em>&#x2a;</em>
                </label>
                <input name="name" required type="text" />
                <label>
                  EMAIL <em>&#x2a;</em>
                </label>
                <input name="email" required type="email" />
                <label>
                  YOUR MESSAGE <em>&#x2a;</em>
                </label>
                <textarea name="message" required rows="4"></textarea>
                <div className="text-center">
                  <button type="submit" id="submitForm" value="SEND">
                    {" "}
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
    </div>
  );
};
