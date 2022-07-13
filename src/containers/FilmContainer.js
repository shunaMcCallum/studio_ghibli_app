import React, { useState } from 'react';
import FilmSelect from '../components/FilmSelect';
import FilmDetails from '../components/FilmDetails';
import './FilmContainer.css';

const FilmContainer = ({ films }) => {

    const [selectedFilm, setSelectedFilm] = useState(null);

    // this function returns the list of characters attached to each film - these are stored in the API as further web links so it is necessary
    // to do another fetch request in order to get the character's name
    const handleFilmSelect = ((film) => {
        // here we create an array and loop through the character URL's that are stored in the film object
        // then into the array goes a list of promises to return the data on each character
        const fetchPromises = film.people.map((person) => {
            return fetch(person).then(res => res.json())
        });
        // Promise.all takes in an array of promises, so we feed it our array from above and what we do is assign a new list to our film object
        // which whill now contain a list of character objects instead of URL's
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
            {/* the selected film details will only be shown if a selected film exists - by default there is no selected film so nothing will show */}
            {selectedFilm ? <FilmDetails film={selectedFilm} /> : null}
        </div>
    );
}

export default FilmContainer;