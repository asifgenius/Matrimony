import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Navbar.css';
import SubNavbar from "./SubNavbar";
import { MENU } from "./config";

type IMenu = {
	// key        : value 
	[type: string]: string[]
}
function NavBar() {
	const [item, setItem] = useState<string[]>([]);
	const handleItemClick = (type: any) => {
		const menu: IMenu   = MENU;
		setItem(menu[type])
	}

	return (
		<div>
			<Navbar className="nav-bar-color">
				<Container>
					<Navbar.Brand href="#home" className="nav-bar-color navbar-size">Matrimony</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="">
						<div >
							<Nav className=" ">
								<div className="d-flex text-color nav-text">
									<Nav.Link onClick={() => handleItemClick("myMatrimony")} className="text-color ms-2" href="#">My Matrimony</Nav.Link>								
									<Nav.Link className="text-color  ms-5" onClick={()=> handleItemClick("matches")} href="#">Matches</Nav.Link>
									<Nav.Link className="text-color ms-5" onClick={()=> handleItemClick("search")} href="#">Search</Nav.Link>
									<Nav.Link onClick={() => handleItemClick("inbox")} className="text-color mx-5" href="#">Inbox</Nav.Link>
								</div>
								<div>										
										</div>
								<div className="d-flex text-color">
									<Button variant="outline-light" className="navBtn">Upgrade Now</Button>
									<Nav.Link className="text-color border-end mx-3" href="#link">Help</Nav.Link>
									<Nav.Link className="text-color " href="#link">My Profile</Nav.Link>
								</div>
							</Nav>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="match-navbar">
				{item.length > 0 &&
					<div>
						<SubNavbar matches="" item={item} ></SubNavbar>
					</div>}
			</div>
		</div >
	)
}
export default NavBar;