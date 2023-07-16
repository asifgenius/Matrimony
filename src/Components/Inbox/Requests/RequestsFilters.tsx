import React from 'react';
import Form from 'react-bootstrap/Form';
import './RequestsFilters.css'
import { Col, Row } from 'react-bootstrap';
function RequestsFilter() {
    return (
        <>
        <Row >
            <Col xs={12} md={12}>
            <div className='request-filters'>
                <div className='request-filter-text'>
                    <p className='request-text'>Filters</p>
                </div>
                <div className='request-filter-item p-2'>
                    <div className='request-text-size' >
                        <Form.Check aria-label="option 1" name="exampleRadios" id="exampleRadios1" value="option1" label="All Requests" defaultChecked />
                        <Form.Check type="checkbox" name="exampleRadios" id="exampleRadios2" value="option2" label="Photo Requests" defaultChecked />
                        <Form.Check aria-label="option 1" name="exampleRadios" id="exampleRadios1" value="option1" label="Phone Requests" defaultChecked />
                    </div>
                </div>
            </div>
            </Col>
            </Row>
        </>
    )
}

export default RequestsFilter;