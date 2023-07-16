import React, { useState } from "react";
import './BasicCard.css'
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
function BasicScarch() {
	const animatedComponents = makeAnimated();
	const [selectoption, setSelectoption] = useState()
	return (
		<>
			<div className="age-size">
				<div className="background">
					<Container>
						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">Age</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-2 mb-2">
									<div>
										<Form.Select aria-label="Default select example" className="container-scarch mt-1 text-size">
											<option>18</option>
											<option value="1">19</option>
											<option value="2">20</option>
											<option value="3">21</option>
										</Form.Select>
									</div>
									<div>
										<p className="age-text mx-2 mt-1"> to</p>
									</div>
									<div>
										<Form.Select aria-label="Default select example" className="container-scarch mt-1 text-size">
											<option>22</option>
											<option value="1">19</option>
											<option value="2">20</option>
											<option value="3">21</option>
										</Form.Select>
									</div>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">Height</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-2 mb-2">
									<div>
										<Form.Select aria-label="Default select example" className="container-scarch mt-1 text-size">
											<option>5' - 152cm</option>
											<option value="1">5' 1" - 154cm</option>
											<option value="2">5' 2" - 157cm</option>
											<option value="3">5' 3" - 160cm</option>
										</Form.Select>
									</div>
									<div>
										<p className="age-text mx-2 mt-1"> to</p>
									</div>
									<div>
										<Form.Select aria-label="Default select example" className="container-scarch mt-1 text-size">
											<option>6' - 182cm</option>
											<option value="1">6'1" - 185cm</option>
											<option value="2">6'2" - 187cm</option>
											<option value="3">6'3" - 190cm</option>
										</Form.Select>
									</div>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">Marital Status</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-2 mb-2">
									<div className="w-100">
										<Select
											components={animatedComponents}
											defaultValue={[MaritalStatus[0]]}
											isMulti
											options={MaritalStatus}
										/>
									</div>

								</div>
							</Col>
						</Row>
						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">Religion</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-2 mb-2">
									<div className="w-100">
										<Select
											components={animatedComponents}
											defaultValue={[Religion[0]]}
											isMulti
											options={Religion}
										/>
									</div>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">Mother Tongue</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-2 mb-2">
									<div className="w-100">
										<Select
											components={animatedComponents}
											defaultValue={[MotherTongue[0]]}
											isMulti
											options={MotherTongue}
										/>
									</div>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">Community</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-2 mb-2">
									<div className="w-100">
										<Select
											components={animatedComponents}
											defaultValue={[Community[1]]}
											isMulti
											options={Community}
										/>
									</div>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">Country Living in</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-2 mb-2">
									<div className="w-100">
										<Select
											components={animatedComponents}
											defaultValue={[CountryLivingIn[0]]}
											isMulti
											options={CountryLivingIn}
										/>
									</div>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">State Living in</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-2 mb-2">
									<div className="w-100">
										<Select
											components={animatedComponents}
											defaultValue={[StateLivingIn[0]]}
											isMulti
											options={StateLivingIn}
										/>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">Photo Settings</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-3 mb-2">
									<div className="d-flex">
										<div>
											<input type={"checkbox"} />
										</div>
										<div>
											<p className="mx-2">Visiable to all</p>
										</div>
									</div>
									<div className="d-flex">
										<div>
											<input type={"checkbox"} />
										</div>
										<div>
											<p className="mx-2">Protected Photo</p>
										</div>
									</div>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2">Do no Show</p></Col>
							<Col xs={9} md={9}>
								<div className="d-flex mt-3 mb-2">
									<div className="d-flex">
										<div>
											<input type={"checkbox"} />
										</div>
										<div>
											<p className="mx-2 mb-3">Profiles that have Filtered me out</p>
											<a href="" className="link">Advanced Scarch options</a>
										</div>
									</div>
									<div className="d-flex">
										<div>
											<input type={"checkbox"} />
										</div>
										<div>
											<p className="mx-2">Profiles that I have already viewed</p>
										</div>
									</div>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={5} md={3}>
								<p className="text-save fw-bold">Save up to 5 searches</p>
								<p className="mt-3 mb-2">Save Search as</p></Col>
							<Col xs={7} md={7}>
								<div className="d-flex mt-3 mb-2">
									<div className="d-flex">
										<div>
											<input className="mt-3" type={"text"} placeholder="e.g country, 20-22" />
										</div>
									</div>
								</div>
							</Col>
						</Row>

						<Row>
							<Col xs={5} md={3}><p className="mt-3 mb-2"></p></Col>
							<Col xs={9} md={9}>
								<div className="d-flex mt-3 mb-2 text-center button-text">
									<div >
										<Button variant="info" className="button">Search <span><FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffffff", }} /></span></Button>
									</div>
									<div className="text-center mt-2">
										<a href="" className="mx-2 mt-5 link-btn">Reset</a>
									</div>
								</div>
							</Col>
						</Row>
					</Container>






				</div>

			</div>
		</>
	)

}

export default BasicScarch;