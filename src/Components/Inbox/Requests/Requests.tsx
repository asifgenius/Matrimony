import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Requests.css'
import RequestsFilter from './RequestsFilters';
import RequestsCard from './RequestsCard';

function Requests() {

	return (
		<>
			<div className="requests-background-color">
				<Row className="w-100">
					<Col xs={3} md={4}>
						<RequestsFilter></RequestsFilter>
					</Col>
					<Col xs={8} md={8}>
						<div style={{ width: "85%" }}>
							<RequestsCard></RequestsCard>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default Requests;