import React from 'react';
import './AcceptedItems.css'
import AcceptedFilters from './AcceptedFilters';
import AcceptedCard from './AcceptedCard';

function AcceptedItems() {
	return (
			<div className="d-flex accepted-item-background">
				<AcceptedFilters></AcceptedFilters>
				<AcceptedCard></AcceptedCard>
			</div>
	)
}

export default AcceptedItems;