import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UserData from '../../../data/Users.json'
import { Button } from "react-bootstrap";
import './RecenlyViews.css'

// import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

function RecenlyViews() {

	return (
		<>
			< div className="background-color">
				<div className=''>
					<div className="cards">
						{/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}












































						<p className="cards-text">Recenly Viewed Members</p>






						<Carousel className="cards-btn">								
									{
										UserData.map(user => (
											<Carousel.Item >
												
											<CardGroup className=" " key={user.id}>
											<div className="d-flex cards-profile">
												<Card>
													<Card.Img variant="top" src="{user.image}/100px160" />
													<Card.Body>
														<Card.Title></Card.Title>
														<p className="">{user.name}</p>
														<p className=""><small className="text-muted">{user.age}, {user.community}, {user.motherTongue}, {user.state}</small></p>
													</Card.Body>
													<Card.Footer>
														<small className="text-muted">Connect with her?</small><br />
														<Button className="text-btn" variant="info"> Yes</Button>
													</Card.Footer>
												</Card>
											
													</div>
											</CardGroup>
										
											</Carousel.Item>
										)
										)
									}								
						</Carousel>
								<hr />
								<a className="text-link" href="">See All</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default RecenlyViews;