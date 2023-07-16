import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import { useLocation } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import './FilteredOutCard.css';

function FilteredOutCard() {
    const location = useLocation();
    const [filterOutSection, setFilterOutSection] = useState<string | null>(null)
    const handleVisibleSection = (id: string | null) => {
        setFilterOutSection(id)
    }
    return (<>
    <div className="filter-out-card-text"> </div>
        <div className="filter-out-card filter-out">
            <Card className="filter-out-nav">
                <Card.Header className="filter-out-requests">
                    <Nav variant="tabs" defaultActiveKey={"#"}>
                        <Nav.Item>
                            <Nav.Link className="filter-out-button" onClick={() => handleVisibleSection("allRequests")} href="/inbox/pending/interests" >All Requests</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => handleVisibleSection("filterOut")} href="#" className="filter-out-filter-text w-100">Filter Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <div>
                    <Card.Body className="filter-out-cards-text mb-5">
                        {
                            filterOutSection === "filterOut" ?
                             
                                    <div className=' text-center'>
                                        <img src="" alt="" />
                                        <p className='sent-card-text'>There are no Sent Invitations</p>
                                        <a className='sent-card-link' href="/match"> View My Matches</a>
                                    </div>
                              
                                :

                                    <div className=' text-center'>
                                        <img src="" alt="" />
                                        <p className='sent-card-text'>There are no Sent Invitations</p>
                                        <a className='sent-card-link' href="/match"> View My Matches</a>
                                    </div>
                              
                        }
                    </Card.Body>
                </div>
            </Card>
        </div>
    </>)
}

export default FilteredOutCard;



