import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import './ProfileIdScarch.css'
import { Button } from "react-bootstrap";

function ProfileIdScarch() {
	return (
			<div className="mt-3">
				<div className="backgroundColor">
					<div>
						<p className="text-cards save-card p-2 mt-1">
							Profile ID Search</p>
					</div>
					<div className="d-flex p-2 ">
						<input type="text" className="profile-id-scarch" placeholder="Entry Profile ID" />
						<Button variant="info" className="profile-button ms-2"> Go</Button>
					</div>
				</div>
			</div>
	)
}

export default ProfileIdScarch;