import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RequestsFilter from './RequestsFilters';
import './AcceptedRequests.css'
import AcceptedRequestsCard from './AcceptedRequestsCard';
function AcceptedRequests() {

	return (
		<>
			<div className="requests-background-color d-flex">
				<RequestsFilter></RequestsFilter>
				<AcceptedRequestsCard></AcceptedRequestsCard>
			</div>
		</>
	)
}

export default AcceptedRequests;