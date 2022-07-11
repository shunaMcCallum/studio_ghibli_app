import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageContainer from './containers/HomePageContainer';
import FilmContainer from './containers/FilmContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {


  return (
    <div className="app" style={{
      backgroundImage: `url(https://cdn.vox-cdn.com/thumbor/s2_cd1uqU2wT_uy6vx4-GRESV8k=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19996673/Studio_Ghibli_Logo.jpg)`
    }}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePageContainer />} />
          <Route exact path="/films" element={<FilmContainer />} />
          {/* <Route exact path="/charts" element={<Chart />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
