import React from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';
import Match from './Pages/MatchPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NearMe from './Components/Matches/NearMe/NearMe';
import ScarchPage from './Pages/ScarchPage';
import NavBar from './Navbar/Navbar';
import PendingRequests from './Components/Inbox/Requests/PendingRequests';
import RequestsFilter from './Components/Inbox/Requests/RequestsFilters';
import RequestsCard from './Components/Inbox/Requests/RequestsCard';
import DeletedItems from './Components/Inbox/Deleted/DeletedItems';
import AcceptedItems from './Components/Inbox/Accepted/AcceptedItems';
import AcceptedRequests from './Components/Inbox/Requests/AcceptedRequests';
import SendRequests from './Components/Inbox/Requests/SendRequests';
import Received from './Components/Inbox/Received/Received';
import AllRequest from './Pages/InboxPage/Received/AllRequest';
import FilteredOut from './Pages/InboxPage/Received/FilteredOut';
import SentItems from './Components/Inbox/Sent/SentItems';
import BasicScarch from './Components/Search/BasicScarch/BasicScarch';
import Dashboard from './Pages/MyMatrimonyPage/Dashboard';
import MyProfile from './Pages/MyMatrimonyPage/MyProfile';
import Setting from './Pages/MyMatrimonyPage/Setting';
import Footer from './Foolter/Footer';
function App() {
  return (

    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Router>
          <Routes>

            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/my-profile' element={<MyProfile></MyProfile>}></Route>
            <Route path='/my-account' element={<Setting></Setting>}></Route>
            <Route path='/match' element={<Match />}></Route>
            <Route path='/' element={<NearMe></NearMe>}></Route>
            <Route path='/search/advanced-search' element={<ScarchPage></ScarchPage>}></Route>
            <Route path='/search/basic-search' element={<BasicScarch></BasicScarch>}></Route>
            <Route path='/inbox/pending/interests' element={<AllRequest></AllRequest>}></Route>
            <Route path='/inbox/filteredout' element={<FilteredOut></FilteredOut>}></Route>
            <Route path='/inbox/pending/requests' element={<PendingRequests></PendingRequests>}></Route>
            <Route path='/inbox/accepted/requests' element={<AcceptedRequests></AcceptedRequests>}></Route>
            <Route path='/inbox/sent/requests' element={<SendRequests></SendRequests>}></Route>
            <Route path='/inbox/send/interests' element={<SentItems></SentItems>}></Route>
            <Route path='/inbox/archived/interests' element={<DeletedItems></DeletedItems>}></Route>
            <Route path='/inbox/accepted/interests' element={<AcceptedItems></AcceptedItems>}></Route>
          </Routes>
        </Router>
      </div>
      <div>
       <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
