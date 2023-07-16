import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RequestsFilter from './RequestsFilters';
import RequestsCard from './RequestsCard';
import './PendingRequests.css'
import PendingRequestsItem from './PendingRequestsCard';
import PendingRequestsCard from './PendingRequestsCard';
function PendingRequests() {

	return (
		<>
			<div className="requests-background-color d-flex">
				<RequestsFilter></RequestsFilter>
				<PendingRequestsCard></PendingRequestsCard>
			</div>
		</>
	)
}

export default PendingRequests;