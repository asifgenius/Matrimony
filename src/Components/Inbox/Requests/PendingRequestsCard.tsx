import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './PendingRequestsCard.css';

import { useLocation } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
function PendingRequestsCard() {
	const location = useLocation();
	const [visibleSection, setVisibleSection] = useState<string | null>(null)
	const handleVisibleSection = (id: string | null) => {
		setVisibleSection(id)
	}
	console.log("location.pathname", location.pathname)
	console.log("visibleSection", visibleSection)
	return (
		<>
			<Row>
				<Col xs={12} md={12}>

					<div className="pending-request-card">
						<Card className="inbox-cards">
							<Card.Header className="inbox-requests">
								<Nav variant="tabs" activeKey={"#"}>
									<Nav.Item>
										<Nav.Link className="pending-requests" onClick={() => handleVisibleSection("pendingRequests")} href="#" >Pending Requests</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link onClick={() => handleVisibleSection("acceptedRequests")} href="/inbox/accepted/requests" className="accepted w-100">Accepted Requests</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link onClick={() => handleVisibleSection("sendRequests")} href="/inbox/sent/requests" className="send-requests-navbar">Send Requests</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<div className="request-card">
								<Card.Body className="request-cards-text mb-5">
									{
										visibleSection ?
											<div>
												{
													visibleSection === "pendingRequests" &&
													<div>

														<Card.Title className="pending-text">  There are no Pending Requests</Card.Title>
													</div>

												}
												{visibleSection === "acceptedRequests" &&
													<div>
														<Card.Title className="pending-text">  There are no Accepted Requests</Card.Title>
													</div>
												}
												{visibleSection === "sendRequests" &&
													<div>
														<Card.Title className="pending-text">  There are no Send Requests</Card.Title>
													</div>
												}
											</div>
											:
											<div>
												<div>
													<Card.Title className="pending-text">  There are no Pending Requests</Card.Title>
												</div>
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

export default PendingRequestsCard;