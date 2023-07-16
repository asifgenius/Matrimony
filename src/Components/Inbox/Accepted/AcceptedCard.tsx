import React from 'react';
import './AcceptedCard.css'
import { Button, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { faPhone,  faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
function AcceptedCard() {
    return (
        <>
            <Col xs={8} md={8}>
                <p className='fw-bold sent-text'>Accepted Invitations</p>
                <div className='sent-container mt-2'>
                    {/* <div className='sent-background-color text-center'>
						<img src="" alt="" />
						<p className='sent-card-text'>There are no Delected Invitations</p>
					</div> */}

                    <Container className='sent-background-color text-center'>
                        <Row>
                            <Col><Card.Img variant="top" className='accepted-images-size' src="https://www.mrdustbin.com/en/wp-content/uploads/2021/02/olga-kurylenko-852x1024.jpg" />  </Col>
                            <Col className='mt-3 mb-3 border-end border-1 accepted-text-card'>
                                <h5 className='text-sm-start'>Wesley</h5>
                                <div>
                                    <Row>
                                        <Col>
                                            <div className='d-flex'>
                                                {/* <FontAwesomeIcon className=' mt-1 comments' icon={faComments} /> */}

                                                <p className='px-2'>  Online 2 week age</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row className='text-sm-start'>
                                        <Col>
                                            <p>22 yrs, 5'5"</p>
                                            <p>Bangali, sunni</p>
                                            <p>Kommila</p>
                                            <p>Bsc</p>
                                            <p>Not working</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col className='text-center mt-2 profile-text-btn'>
                                <p className='profile fst-italic mt-5'><span className='accepted-card-link'>Update</span>  to <p> contact her directly</p></p>
                                <div className=' profile-color'>
                                    {/* <FontAwesomeIcon icon={faCircleCheck} className='profile-like profile-color mt-3' /> */}
                                    <Button variant="light" className='button-color mt-3'>
                                        <div className='d-flex '>
                                            <FontAwesomeIcon className='mt-1 accepted-button-text' icon={faPhone} /> <span className='accepted-text-button ms-1 fw-bold'>Call</span>
                                            
                                            </div>
                                    </Button>
                                </div>

                                <div className=' profile-color'>
                                    <Button variant="light" className='whatsapp-button-color mt-3'>
                                        <div className='d-flex '>
                                        <FontAwesomeIcon className='mt-1 accepted-whatapp-button' icon={faComment}/> <span className='accepted-whatapp-button ms-1 fw-bold'>WhatsApp</span>                                           
                                            </div>
                                    </Button>
                                    
                                </div>
                                <div className=' profile-color'>
                                    <Button variant="light" className='button-color mt-3'>
                                        <div className='d-flex '>
                                        <FontAwesomeIcon icon={faComment} className='accepted-whatapp-button mt-1' /> <span className='accepted-text-button ms-1 fw-bold'>Matrimony Chat</span>                                           
                                            </div>
                                   </Button>                                
                                </div>
                            </Col>                            
                        </Row>
                    </Container>
                </div>
            </Col>
        </>
    )
}

export default AcceptedCard;