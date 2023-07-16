import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import './ReceivedFilter.css';

function ReceivedFilter() {
    return (
        <>
        <div className='received-filter '>
                <div className='received-filter-text'>
                    <p className='received-filter-item-text'>Filter</p>
                </div>
                <div className='received-filter-item p-2'>
                    <div className='received-filter-text-size' >
				<Form.Check type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="All Requests" defaultChecked />
				<Form.Check type="radio" name="exampleRadios" id="exampleRadios2" value="option2" label="Premium Members" />
                <Form.Check type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="Members online now"/>
                <Form.Check type="radio" name="exampleRadios" id="exampleRadios2" value="option2" label="Phone verified Members" />
                <Form.Check type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="Members with Photos"/>
			
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReceivedFilter;