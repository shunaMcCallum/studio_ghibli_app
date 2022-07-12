import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmService from './services/FilmService';
import HomePageContainer from './containers/HomePageContainer';
import FilmContainer from './containers/FilmContainer';
import ChartContainer from './containers/ChartContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    FilmService.getFilms()
      .then(data => setFilms(data));
  }, [])

  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<HomePageContainer />} />
          <Route exact path="/films" element={<FilmContainer films={films} />} />
          <Route exact path="/charts" element={<ChartContainer films={films} />} />

        </Routes>
        <Footer />

      </Router>

    </div>
  );
}

export default App;
