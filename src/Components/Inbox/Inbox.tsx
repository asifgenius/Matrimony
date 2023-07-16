import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Inbox.css'
import Requests from './Requests/Requests';
import PendingRequests from './Requests/PendingRequests';

function Inbox (){
    return(
        <>
        <Router>
            <Routes>
                <Route path='/inbox' element={<PendingRequests></PendingRequests>}/>
                <Route path='/accepted/requests?page=1&pg_id=inbox-service%3A5153713A3710' element={<Requests></Requests>}/>
                <Route path='/sent/requests?page=1&pg_id=inbox-service%3A0513A371' element={<Requests></Requests>}/>
            </Routes>
        </Router>
        
        </>
    )
}
export default Inbox;