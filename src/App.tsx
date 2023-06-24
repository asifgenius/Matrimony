import React from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';
import Match from './Pages/MatchPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NearMe from './Components/Matches/NearMe/NearMe';
import RecenlyViews from './Components/Matches/RecenlyViews/RecenlyViews';
import ScarchPage from './Pages/ScarchPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/match' element={<Match/>}></Route>
        <Route path='/near-me' element={ <NearMe></NearMe>}></Route>
        <Route path='/viewed' element={<RecenlyViews></RecenlyViews>}></Route>
        <Route path='/search/advancedscarch' element={<ScarchPage></ScarchPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
