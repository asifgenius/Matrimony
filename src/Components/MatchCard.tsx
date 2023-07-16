import React, { useEffect } from 'react';
import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MatchCard.css'
import { faCircleCheck, faComments, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IUser from '../interface/UserCardJson'
import { useState } from 'react';
import UserData from '../data/Users.json'

const MatchCard: FC = () => {

	return (
		<>
			{
				UserData.map(user => (
					<div key={user.id} className='profile-background-color w-100'>
						<Container>
							<Row className='border-light border-1 justify-content-center profile-card' style={{ marginTop: "-270px" }}>
								<Col><Card.Img variant="top" className='matches-image' src= {user.image} />
								</Col>
								<Col className='mt-3 mb-3 border-end border-1 text-card'>
									<h5 className='text-sm-start'>{user.name}</h5>
									<div>
										<Row>
											<Col>
												<div className='d-flex'>
													<FontAwesomeIcon className=' mt-1 comments' icon={faComments} />
													<p className='px-2'>  {user.active}</p>
												</div>
											</Col>
											<Col>
												<div className='d-flex'>
													<p> <FontAwesomeIcon icon={faUserGroup} className='people' /></p>
													<p className='text-sm-start text-body px-2'> You & Her</p>
												</div>
											</Col>
										</Row>
										<hr />
										<Row className='text-sm-start'>
											<Col>
												<p>{user.age}</p>
												<p>{user.community}</p>
												<p>{user.motherTongue}</p>
											</Col>
											<Col>
												<p>{user.maritalStatus}</p>
												<p>{user.countryLivingIN}</p>
												<p>{user.working}</p>
											</Col>
										</Row>
										<p className='text-sm-start mt-3'>{user.text}... <a className='text-end' href="">More</a></p>
									</div>
								</Col>
								<Col className='text-center mt-5 profile-text-btn'>
									<p className='profile fst-italic mt-5'>Like this Profile?</p>
									<div className=' profile-color'>
										<FontAwesomeIcon icon={faCircleCheck} className='profile-like profile-color mt-3' />
										<p className='profile-text profile-color'>Connect Now</p>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				)
				)
			}
		</>
	)

}
export default MatchCard;



