import React from 'react';
import Accordion from "../Components/common/Accordion";
import './Filter.css'
import { RecenlyJoined, ActiveMembers, AnnualIncome, MaritalStatus, Relogion, Community, MotherTongue, CountryLivingIN, StateLivingIN, CountryGrewUpIN, WorkingWith } from './FilterItem';

function Filter() {
	return (
		<div>
			<div className='card-text' >
				<p className=''> Refine Scarch</p>
			</div>
			<Accordion item={"Recently Joined"}><RecenlyJoined></RecenlyJoined></Accordion>
			<Accordion item={"Active Members"}><ActiveMembers></ActiveMembers></Accordion>
			<Accordion item={"Annual Income"}><AnnualIncome></AnnualIncome></Accordion>
			<Accordion item={"Marital Status"}><MaritalStatus></MaritalStatus></Accordion>
			<Accordion item={"Religion"}><Relogion></Relogion></Accordion>
			<Accordion item={"Community"}><Community></Community></Accordion>
			<Accordion item={"Mother Tongue"}><MotherTongue></MotherTongue></Accordion>
			<Accordion item={"Country Living In"}><CountryLivingIN></CountryLivingIN></Accordion>
			<Accordion item={"State Living In"}><StateLivingIN></StateLivingIN></Accordion>
			<Accordion item={"Country GrewUp In"}><CountryGrewUpIN></CountryGrewUpIN></Accordion>
			<Accordion item={"Working With"}><WorkingWith></WorkingWith></Accordion>
		</div>

	)
}

export default Filter;