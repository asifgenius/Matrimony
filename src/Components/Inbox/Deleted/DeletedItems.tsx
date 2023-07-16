import React from 'react';
import './DeletedItems.css'
import DeletedFilters from './DeletedFilters';
import DeletedCard from './DeletedCard';

function DeletedItems() {
	return (
			<div className="d-flex delete-item-background-color">
				<DeletedFilters></DeletedFilters>
				<DeletedCard></DeletedCard>
			</div>
	)
}

export default DeletedItems;