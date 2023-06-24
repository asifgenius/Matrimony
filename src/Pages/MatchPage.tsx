// import React from 'react';
// import Filter from '../Components/Filter';
// import MatchCard from '../Components/MatchCard';
// import NavBar from '../Navbar/Navbar';

// import './MatchPage.css'
// function MatchPage() {
//     return (
//         <div>
//         <NavBar></NavBar>
//         <div className='background-color'>
//             <div className='d-flex ' >
//                 <div style={{width:"19%", paddingLeft:"0px"}}>
//                 <Filter ></Filter>
//                 </div>
//                 <div className='match-card'>
//                     <p className='text'>New Members who match most of you Preferences</p>
//                     <MatchCard></MatchCard>
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }
// export default MatchPage;

import React from 'react';
import NewMatches from '../Components/Matches/NewMatches/NewMatches';
import './MatchPage.css'
function MatchPage() {
    return (
        <div>
        <NewMatches></NewMatches>
        </div>
    )
}
export default MatchPage;