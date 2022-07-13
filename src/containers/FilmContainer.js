import React, { useState } from 'react';
import FilmSelect from '../components/FilmSelect';
import FilmDetails from '../components/FilmDetails';
import './FilmContainer.css';

const FilmContainer = ({ films }) => {

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
        <div className="film-container">
            <h2 className="film-container-header">Welcome to the Film Page!</h2>
            <p>Choose a film from the dropdown menu to view the full details.</p>
            <div className="film-dropdown">
                <FilmSelect films={films} onFilmSelect={handleFilmSelect} />
            </div>
            {selectedFilm ? <FilmDetails film={selectedFilm} /> : null}
        </div>
    );
}

export default FilmContainer;