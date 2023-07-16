import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdvancedScarch from "../Components/Search/AdvancedScarch/AdvancedScarch";
import BasicScarch from "../Components/Search/BasicScarch/BasicScarch";
import './ScarchPage.css'
function ScarchPage() {
	return (
		<div>
			{/* <Router>
				<Routes>
					<Route path="/basicscarch" element={<BasicScarch></BasicScarch>}> </Route>
					<Route path="/advancedscarch" element={<AdvancedScarch></AdvancedScarch>}> </Route>
				</Routes>
			</Router> */}

			<AdvancedScarch/>

		</div>
	)
}
export default ScarchPage;