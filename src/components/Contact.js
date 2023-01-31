import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "../css/contact.css";
import emailjs from "@emailjs/browser";
import { GrSend } from "react-icons/gr";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const validEmailRegex = RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  );

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "message":
        setMsg(event.target.value);
        break;
      default:
        break;
    }
  }

  function sendEmail() {
    let formData = { name: name, email: email, message: msg };
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setInfo("I'll reply to you shortly, thanks!");
          setMsg("");
          setName("");
          setEmail("");
          setLoading(false);
        },
        (error) => {
          setInfo("Oops!!! Something is wrong");
          setLoading(false);
        }
      );
  }

  function handleSubmit(event) {
    if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
      setError("No name? Are you Lord Voldemort?");
    } else if (email === "" || !validEmailRegex.test(email)) {
      setError("You missed entering correct email ID!");
    } else if (msg === "") {
      setError("Yes silence is the best answer...but not in here!");
    } else {
      setLoading(true);
      setError("");
      sendEmail();
    }
  }

  return (
    <Container fluid id="contact-section">
      <Row className="contact-heading">
        <h1 className="heading">Let's Connect</h1>
        <h6>
          I am always up for good food and discussions about exciting projects.
          Drop me a message and I'll reply back
        </h6>
      </Row>
      <Row className="contact-row">
        <Col xs={12}>
          <div className="contact">
            <div className="contact-card">
              <div className="contact-form">
                {error !== "" ? <h3>{error}</h3> : null}
                <input
                  type="text"
                  value={name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  className="contact-field"
                  id="form-name"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Your E-mail ID"
                  autoComplete="off"
                  className="contact-field"
                  id="form-email"
                  required
                />
                <input
                  type="text"
                  value={msg}
                  onChange={handleChange}
                  name="message"
                  placeholder="What do you want to say..."
                  autoComplete="off"
                  className="contact-field"
                  id="form-message"
                  required
                />
                <button id="submit-btn" onClick={handleSubmit}>
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      aria-hidden="true"
                    />
                  ) : (
                    <GrSend size="30px" />
                  )}
                </button>
                {info !== "" ? <h3 id="information">{info}</h3> : null}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
