import React from 'react'
import { Container } from 'react-bootstrap'
import { Row,Col } from 'react-bootstrap'
import '../css/about.css'

function About() {
  return (
    <>
    <Container fluid id="about">
        <Row className='about-row'>
            <Col md={7} xs={12} className="about-content">
            <h3 className="heading">About me...</h3>
                <p>Hey there. I'm Tanmay, a software engineer with special interest in Web developement. I currently live in <a className="content-link" href="https://goo.gl/maps/8N5KRaFdZzAtgsYS9" rel="nofollow noreferrer" target="_blank">New Delhi</a>, India but owing to my parents’ air force life, much of my life has been spent in ‘Bharat Darshan’. I am fairly confident about my cooking and coding skills. Professionally a Computer Science Engineer, currently trying to make healthcare accessible for all by continuous innovation, with awesome folks at <a className="content-link" href="https://www.cerner.com/">Cerner Corporation</a>.</p>
                <p>When not working or pondering over some problem statement, I am usually found exploring lastest world affairs or tasty street food.</p>
                <p>Few things not mentioned in my resume. I love trekking and want to cover as many mountain treks as possible. I admit to having a weak spot for chole bhature. Consistency is my strength. Have been trying to maintain a balance between fitness and love for food and I am consistently failing at it.</p>
                <p>Let us connect on LinkedIn. I am always excited to work with like minded people. Let's discuss over <span id="coffee">coffee</span> <i>chai</i>.</p>
            </Col>
            <Col md={5} xs={12} className="spider-quote">
                <h1>"Spiders are the only web developers that are happy to find bugs"</h1>
                <h5>~Every web developer EVER</h5>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default About
