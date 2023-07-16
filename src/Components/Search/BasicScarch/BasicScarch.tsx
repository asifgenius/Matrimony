import React from 'react'
import './BasicScarch.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SavedScarch from './SavedScarch';
import ProfileIdScarch from './ProfileIdScarch';
import BasicCard from './BasicCard'
function BasicScarch() {

	return (
		<div className="basic-search-component">
			<Row className="w-100">
				<Col xs={8} md={8}>
					<BasicCard></BasicCard>
				</Col>
				<Col xs={4} md={3}>
					<SavedScarch></SavedScarch>
					<ProfileIdScarch></ProfileIdScarch>
				</Col>
			</Row>
		</div>
	)
}

export default BasicScarch;