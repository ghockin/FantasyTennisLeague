import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fixtures from './pages/Fixtures';
import Players from './pages/Players';
import Results from './pages/Results';


function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/"></Route>
          <Route path="/fixtures" element={Fixtures}></Route>
          <Route path="/players" element={Players}></Route>
          <Route path="/results" element={Results}></Route>
        </Routes>
      </Navbar>
    </Router>
  );
}

export default App;
