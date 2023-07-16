import React from 'react';
import NavBar from '../../../Navbar/Navbar';
import Filter from '../../Filter';
import MatchCard from '../../MatchCard';

import './NearMe.css'
function NearMe() {
    return (
        <div className='near-me-component'>
            <div className='d-flex ' >
                <div className='filter'>
                    <Filter/>
                </div>
                <div className='match-card'>
                    <p className='text'> Members that match your Partner Preferences <a href="">Edit</a></p>
                    <MatchCard />
                </div>
            </div>
        </div>
    )
}
export default NearMe;