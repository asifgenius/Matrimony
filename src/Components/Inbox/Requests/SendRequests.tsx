import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './SendRequests.css';

import { useLocation } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import RequestsFilter from "./RequestsFilters";
import SendRequestsCard from "./SendRequestsCard";
function SendRequests() {
	return (
		<>
		<div className="requests-background-color d-flex">
				<RequestsFilter></RequestsFilter>
				<SendRequestsCard></SendRequestsCard>
			</div>
		</>
	)
}

export default SendRequests;