import React, { useState } from 'react';
import FilmSelect from '../components/FilmSelect';
import FilmDetails from '../components/FilmDetails';
import './FilmContainer.css';

const FilmContainer = ({films}) => {

    const [selectedFilm, setSelectedFilm] = useState(null);


    const handleFilmSelect = ((film) => {
        const fetchPromises = film.people.map((person) => {
            return fetch(person).then(res => res.json())
        });
        Promise.all(fetchPromises)
            .then(data => {
                film.peopleList = data;
                setSelectedFilm(film);
        })
    })


    return (
        <div className="film-box">
            <header className="page-header">
                <img id="header-image" src="https://www.pngitem.com/pimgs/m/83-834494_studio-ghibli-logo-vector-hd-png-download.png"></img>
            </header>
            <FilmSelect films={films} onFilmSelect={handleFilmSelect} />
            <div>
                {selectedFilm ? <FilmDetails film={selectedFilm}/> : null}
            </div>
        </div>
    );
}

export default FilmContainer;