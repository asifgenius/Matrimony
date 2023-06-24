import React from "react";
import './AdvancedScarch.css'
import AdvancedCard from './AdvancedCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SavedScarch from "../BasicScarch/SavedScarch";
import ProfileIdScarch from "../BasicScarch/ProfileIdScarch";
function AdvancedScarch(){
    return(
        <>
        
        <div className="background-color">
			<Row className="w-100">
				<Col xs={8} md={8}>
					<AdvancedCard></AdvancedCard>
				</Col>
				<Col xs={4} md={3}>
					<SavedScarch></SavedScarch>
					<ProfileIdScarch></ProfileIdScarch>
				</Col>
			</Row>
		</div>
        </>
    )
}

export default AdvancedScarch;