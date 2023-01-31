import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {BsLinkedin, BsInstagram, BsFillEnvelopeFill, BsFillHeartFill} from 'react-icons/bs'
import '../css/footer.css';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footer-row">
        <Col className='copyright' lg={4} sm={6} xs={12} >
          <h6>No Copyright issues | Feel free to copy</h6>
        </Col>
        <Col className='made-by' lg={4} sm={6} xs={12} >
          <h6>By Tanmay with <span><BsFillHeartFill color="red" /></span></h6>
        </Col>
        <Col className='social-media-icons' lg={4} sm={12} xs={12}>
          <Row>
          <Col lg={4} xs={4}> <a href="https://www.linkedin.com/in/tanmay-17886615b/" target="_blank" rel="noreferrer"><BsLinkedin color="#0e76a8" /></a></Col>
          <Col lg={4} xs={4}><a href="mailto:tanmaypach15@gmail.com" target="_blank" rel="noreferrer"><BsFillEnvelopeFill color="#BB001B" /></a></Col>
          <Col lg={4} xs={4}><a href="https://www.instagram.com/tanmay.sharma.9803/" target="_blank" rel="noreferrer"><BsInstagram color="#8a3ab9"  /></a></Col>
          </Row>
          </Col>
      </Row>
    </Container>
  )
}

export default Footer
