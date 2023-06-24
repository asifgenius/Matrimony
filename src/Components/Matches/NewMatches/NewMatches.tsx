import React from 'react';
import NavBar from '../../../Navbar/Navbar';
import Filter from '../../Filter';
import MatchCard from '../../MatchCard';

import './NewMatches.css'
function NewMatches() {
    return (
        <div>
        <div className='background-color'>
            <div className='d-flex ' >
                <div style={{width:"19%", paddingLeft:"0px"}}>
                <Filter ></Filter>
                </div>
                <div className='match-card'>
                    <p className='text'> Members who match most of you Preferences <a href="">Edit <span className='color-text'>&gt; </span></a></p>
                    <MatchCard></MatchCard>
                </div>
            </div>
        </div>
        </div>
    )
}
export default NewMatches;