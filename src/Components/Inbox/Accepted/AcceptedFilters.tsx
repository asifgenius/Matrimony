import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './AcceptedFilters.css'

function AcceptedFilters() {
	return (
		<>
			<Row className="w-100">
				<Col xs={3} md={12}>
					<div className='sent-filters'>
						<div className='sent-filter-text-card'>
							<p className='sent-filter-text'>Filters</p>
						</div>
						<div className='sent-filter-item p-2'>
							<div className='sent-text-size' >
								<Form.Check aria-label="option 1" name="exampleRadios" id="exampleRadios1" value="option1" label="All Requests" defaultChecked />
								<Form.Check type="checkbox" name="exampleRadios" id="exampleRadios2" value="option2" label="Accepted by me" />
								<Form.Check aria-label="option 1" name="exampleRadios" id="exampleRadios1" value="option1" label="Accepted by them" />
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default AcceptedFilters;