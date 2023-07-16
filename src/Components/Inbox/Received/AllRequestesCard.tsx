import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './AllRequestesCard.css';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function AllRequestesCard() {
	const location = useLocation();
	const [receiveSection, setReceiveSection] = useState<string | null>(null)
	const handleVisibleSection = (id: string | null) => {
		setReceiveSection(id)
	}

	return (
		<>
			<div className="all-request-card w-100">
				<Card className="all-request-nav">
					<Card.Header className="all-request-requests">
						<Nav variant="tabs" defaultActiveKey={"#"}>
							<Nav.Item>
								<Nav.Link className="all-request-button" onClick={() => handleVisibleSection("allRequests")} href="#" >All Requests</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link onClick={() => handleVisibleSection("filterOut")} href="/inbox/filteredout" className="all-request-filter-text w-100">Filter Out</Nav.Link>
							</Nav.Item>
						</Nav>
					</Card.Header>
					<div>
						<Card.Body className="all-request-cards-text mb-5">
							{
								receiveSection === "allRequests" ?
									<Row>
										<Col><Card.Img variant="top" className="all-request-images-size" src="https://www.mrdustbin.com/en/wp-content/uploads/2021/02/olga-kurylenko-852x1024.jpg" />  </Col>
										<Col className='mt-3 mb-3 border-end border-1 all-request-text-card'>
											<h5 className='text-sm-start'>Wesley</h5>
											<div>
												<Row>
													<Col>
														<div className='d-flex'>

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
										<Col className='text-center mt-2 all-request-profile-text-btn'>
											<p className='all-request-text fst-italic mt-5'>  <p> contact her directly</p></p>
											<div className=' all-request-color'>
												{/* <FontAwesomeIcon icon={faCircleCheck} className='profile-like profile-color mt-3' /> */}
												<Button variant="light" className='all-request-button-color mt-3'>
													<div className='d-flex '>
														{/* <FontAwesomeIcon className='mt-1 all-request-button-text' icon={faPhone} /> <span className='all-request-text-button ms-1 fw-bold'>Call</span> */}
													</div>
												</Button>
											</div>
										</Col>
									</Row>
									:

									<Row>
										<Col><Card.Img variant="top" className="all-request-images-size" src="https://www.mrdustbin.com/en/wp-content/uploads/2021/02/olga-kurylenko-852x1024.jpg" />  </Col>
										
										<Col className='mt-3 mb-3 border-end border-1 all-request-text-card'>
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
										<Col className='text-center mt-2 all-request-profile-text-btn'>
											<p className='all-request-text fst-italic mt-5'>  <p> She invited to Connect</p></p>
											<div >
												<div className='mt-1 all-request-accept-button'>
													<div>
														<FontAwesomeIcon icon={faCircleCheck} className='mt-1 all-request-accept-button ' /><br /><span className="ms-1 ">Accept</span>
													</div>
												</div>
												<div className='mt-1 all-request-decline-button'>
													<div>
														
														<FontAwesomeIcon icon={faCircleXmark} className='mt-5  all-request-decline-button ' /><br /><span className="ms-1 ">Decline</span>
													</div>
												</div>
											</div>
										</Col>
									</Row>
							}
						</Card.Body>
					</div>
				</Card>
			</div>
		</>
	)
}

export default AllRequestesCard;