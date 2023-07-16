import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './AcceptedRequestsCard.css';

import { useLocation } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
function AcceptedRequestsCard() {
	const location = useLocation();
	const [visibleSection, setVisibleSection] = useState<string | null>(null)
	const handleVisibleSection = (id: string | null) => {
		setVisibleSection(id)
	}
	return (
		<>
			<Row>
				<Col xs={12} md={12}>

					<div className="pending-request-card">
						<Card className="inbox-cards">
							<Card.Header className="inbox-requests">
								<Nav variant="tabs" defaultActiveKey={"#"}>
									<Nav.Item>
										<Nav.Link className="pending-requests" onClick={() => handleVisibleSection("pendingRequests")} href="/inbox/pending/requests" >Pending Requests</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link onClick={() => handleVisibleSection("acceptedRequests")} href="#" className="accepted w-100">Accepted Requests</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link onClick={() => handleVisibleSection("sendRequests")} href="/inbox/sent/requests" className="send-requests-navbar">Send Requests</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<div className="request-card">
								<Card.Body className="request-cards-text mb-5">
									{
										visibleSection === "acceptedRequests" ?
											<div>
												<div>
													<Card.Title className="pending-text">  There are no Accepted Requests</Card.Title>
												</div>

											</div>
											:
											<div>
												{
													<div>
														<Card.Title className="pending-text">  There are no Accepted Requests</Card.Title>
													</div>
												}
												
											</div>
									}
								</Card.Body>
							</div>
						</Card>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default AcceptedRequestsCard;