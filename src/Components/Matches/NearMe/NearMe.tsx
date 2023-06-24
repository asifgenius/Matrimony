import React from 'react';
import NavBar from '../../../Navbar/Navbar';
import Filter from '../../Filter';
import MatchCard from '../../MatchCard';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './NearMe.css'
function NearMe() {
    return (
        <div>
        <NavBar></NavBar>
        <div className='background-color'>
            <div className='d-flex ' >
                <div style={{width:"19%", paddingLeft:"0px"}}>
                <Filter ></Filter>
                </div>
                <div className='match-card'>
                    <p className='text'> Members that match your Partner Preferences <a href="">Edit <span className='color-text'>&gt; </span></a></p>
                    <MatchCard></MatchCard>
                </div>
            </div>
        </div>

        
        </div>
    )
}
export default NearMe;