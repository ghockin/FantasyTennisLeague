import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage.js';
import Fixtures from './pages/Fixtures.js';
import Players from './pages/Players.js';
import Results from './pages/Results.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/FantasyTennisLeague" element={<Homepage></Homepage>}></Route>
            <Route path="/FantasyTennisLeague/fixtures" element={<Fixtures></Fixtures>}></Route>
            <Route path="/FantasyTennisLeague/players" element={<Players></Players>}></Route>
            <Route path="/FantasyTennisLeague/results" element={<Results></Results>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
