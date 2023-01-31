import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/skills.css'

function Skills() {
  return (
    <>
        <Container fluid id="skill-section">
            <div className='skills'>
                <Row>
                    <h2 className='heading' style={{color:'white'}}>Skills I am proud of...</h2>
                </Row>
                <Row id="skills-row">
                    <Col md={3} xs={12}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front card1-front">
                                <h3>HTML & CSS</h3>
                                </div>
                                <div className="flip-card-back card1-back">
                                <p>Started learning HTML as a hobby to develop static webpage while in school. Came across CSS while styling the webpage to mimic the websites we used to see from our childhood</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                    <Col md={3} xs={12}>
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front card2-front">
                        <h3>Javascript</h3>
                        </div>
                        <div className="flip-card-back card2-back">
                        <p>As interest grew more towards learning web developement, I picked up javascript and loved it since then. It never fails to amuse the developers.</p>
                        </div>
                    </div>
                </div>
                    </Col>
                    <Col md={3} xs={12}>
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front card3-front">
                        <h3>ReactJS</h3>
                        </div>
                        <div className="flip-card-back card3-back">
                        <p>When coding the designed website got repetative, I came across React library. A little tricky at first, but otherwise reduces the developers pain with a huge community support.</p>
                        </div>
                    </div>
                </div>
                    </Col>
                    <Col md={3} xs={12}>
                    <div className="flip-card" id="card4">
                    <div className="flip-card-inner">
                        <div className="flip-card-front card4-front">
                        <h3>NodeJS</h3>
                        </div>
                        <div className="flip-card-back card4-back">
                        <p>Tired out NodeJS to build and run the server for various projects that I've done.</p>
                        </div>
                    </div>
                </div>
                    </Col>
                </Row>
                <Row id="skills-row">
                    <Col md={3} xs={12}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front card3-front">
                                <h3>Growth-oriented</h3>
                                </div>
                                <div className="flip-card-back card3-back">
                                <p>I've never hesitated to take up a new task just by think of the obstacles or failures that might cross my way. Once I take up a work, I make sure to give my best.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                    <Col md={3} xs={12}>
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front card4-front">
                        <h3>Self-disciplined </h3>
                        </div>
                        <div className="flip-card-back card4-back">
                        <p>I follow the simple principle of self-disciplined: Do the right thing even when no one is watching</p>
                        </div>
                    </div>
                </div>
                    </Col>
                    <Col md={3} xs={12}>
                    <div className="flip-card" id="card1">
                    <div className="flip-card-inner">
                        <div className="flip-card-front card1-front">
                        <h3>Accountable</h3>
                        </div>
                        <div className="flip-card-back card1-back">
                        <p>I never shied away from responsibilities. Having accepted one, I always stand by the outcome and take responsibilitiesof my action.</p>
                        </div>
                    </div>
                </div>
                    </Col>
                    <Col md={3} xs={12}>
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front card2-front">
                        <h3>Collaborative</h3>
                        </div>
                        <div className="flip-card-back card2-back">
                        <p>I strongly believe in team-work where everyone grows. I am always open for discussion and actively take part in brainstorming sessions before starting on any project</p>
                        </div>
                    </div>
                </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
   
  )
}

export default Skills