import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import './SavedScarch.css'

function SavedScarch() {
    return (
			<>
				<div>
					<div className="backgroundColor">
						<div>
							<p className="text-cards save-card p-2 ">
								My Saved Searches</p>
						</div>
						<div>
							<p className="p-2">  <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#0860f7" }} /> You have no Saved Searches</p>
						</div>
					</div>
				</div>
			</>
    )
}

export default SavedScarch;