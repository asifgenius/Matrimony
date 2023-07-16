import React, { useState } from "react";
import './AdvancedCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Button } from "react-bootstrap";
import { MaritalStatus, Religion, MotherTongue, Community, CountryLivingIn, StateLivingIn } from './../Scarchdata/Scarchdata';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { LifeStyleAndAppearance, LocationAndGrewUpDetails, MaritalStatusAndReligion, SaveScarchAs, SearchUsingKeyword } from "./ScarchItems";
import SearchAccordion from './ScarchAccordion'

function AdvancedCard() {
	const animatedComponents = makeAnimated();
	return (
		<>
			<div className="age-size">
				<div className="background">
					<Container>
						<MaritalStatusAndReligion></MaritalStatusAndReligion>
						<SearchAccordion item={"Location and Grew up in Details"}><LocationAndGrewUpDetails></LocationAndGrewUpDetails></SearchAccordion>
						<SearchAccordion item={"Search Using Keyword"}><SearchUsingKeyword></SearchUsingKeyword></SearchAccordion>
						<SearchAccordion item={"LifeStyle and Appearance"}><LifeStyleAndAppearance></LifeStyleAndAppearance></SearchAccordion>
						<SaveScarchAs></SaveScarchAs>
					</Container>
				</div>
			</div>
		</>
	)
}
export default AdvancedCard;