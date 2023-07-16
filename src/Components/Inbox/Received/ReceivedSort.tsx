import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import './ReceivedSort.css';

function ReceivedSort() {
    return (
        <>
            <div className='received-sort-filter '>
                <div className='received-sort-text'>
                    <p className='received-sort'>Sort</p>
                </div>
                <div className='received-sort-item p-2'>
                    <div className='received-sort-text-size' >
				<Form.Check type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="Most relevant"/>
				<Form.Check type="radio" name="exampleRadios" id="exampleRadios2" value="option2" label="Newest first" defaultChecked />
                <Form.Check type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="Oldest first"/>			
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReceivedSort;