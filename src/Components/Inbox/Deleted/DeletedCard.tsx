import React from 'react';
import './DeletedCard.css'
import { Col } from 'react-bootstrap';

function DeletedCard() {
	return (
		<>
			<Col xs={8} md={8}>
				<p className='fw-bold sent-text'>Delected Invitations</p>
				<div className='sent-container mt-2'>
					<div className='delete-background-color text-center'>
						<img src="" alt="" />
						<p className='sent-card-text'>There are no Delected Invitations</p>
					</div>
				</div>
			</Col>
		</>
	)
}

export default DeletedCard;