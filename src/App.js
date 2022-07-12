import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmService from './services/FilmService';
import HomePageContainer from './containers/HomePageContainer';
import FilmContainer from './containers/FilmContainer';
import ChartContainer from './containers/ChartContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    FilmService.getFilms()
      .then(data => setFilms(data));
  }, [])

  return (
    <div className="app" style={{
      backgroundImage: `url(https://cdn.vox-cdn.com/thumbor/s2_cd1uqU2wT_uy6vx4-GRESV8k=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19996673/Studio_Ghibli_Logo.jpg)`
    }}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePageContainer />} />
          <Route exact path="/films" element={<FilmContainer films={films} />} />
          <Route exact path="/charts" element={<ChartContainer films={films} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
