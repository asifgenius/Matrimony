
import { Col, Row } from 'react-bootstrap';
import './SentCard.css'

function SentCard() {
	return (
		<>
			<Col xs={8} md={8}>
				<p className='fw-bold sent-text'>Sent Invitations</p>
				<div className='sent-container mt-2'>
					<div className='sent-background-color text-center'>
						<img src="" alt="" />
						<p className='sent-card-text'>There are no Sent Invitations</p>
						<a className='sent-card-link' href="/match"> View My Matches</a>
					</div>
				</div>
			</Col>
		</>)
}

export default SentCard;