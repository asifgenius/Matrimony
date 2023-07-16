import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Navbar.css';
import SubNavbar from "./SubNavbar";
import { MENU } from "./config";
import { IMenu, IMenuItem } from "./types";


function NavBar() {
	const [item, setItem] = useState<IMenuItem[]>([]);
	const handleItemClick = (type: any) => {
		const menu: IMenu = MENU; // menu is a condition which is decleared what type of key i pass and what type of value json have.As a example [type:string] = {value: string , value : string}[] 
		setItem(menu[type])
	}

	return (
		<div>
			<Navbar className="nav-bar-color">
				<Container>
					<Navbar.Brand href="/" className="nav-bar-color navbar-size">Matrimony</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="">
						<div >
							<Nav className=" ">
								<div className="d-flex text-color nav-text">
									<Nav.Link onClick={() => handleItemClick("myMatrimony")} className="text-color ms-2" href="#">My Matrimony</Nav.Link>
									<Nav.Link className="text-color  ms-5" onClick={() => handleItemClick("matches")} href="#">Matches</Nav.Link>
									<Nav.Link className="text-color ms-5" onClick={() => handleItemClick("search")} href="#">Search</Nav.Link>
									<Nav.Link onClick={() => handleItemClick("inbox")} className="text-color mx-5" href="#">Inbox</Nav.Link>
								</div>
								<div>
								</div>
								<div className="d-flex text-color">
									<Button variant="outline-light" onClick={() => alert("Thanks for upgrading")} className="navBtn">Upgrade Now</Button>
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
						<SubNavbar item={item} ></SubNavbar>
					</div>}
			</div>
		</div >
	)
}
export default NavBar;