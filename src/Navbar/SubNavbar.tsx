import React from "react";
import './SubNavbar.css';
import { IMenuItem } from "./types";
import { Nav } from "react-bootstrap";

function SubNavbar({ item }: { item: IMenuItem[] }) {
	return (
		<div>
			<div className="nav-border">
				<div className="d-flex">
					<div className="nav-bar-text d-flex">
						{item.map(each => (
							<div className="navBar ">
								<Nav.Link className="navbar-link nav-border-bottom" href={`${each.link}`}>{each.name}</Nav.Link>
								<p className="nav-border-bottom"></p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SubNavbar;