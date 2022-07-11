import React from 'react';
import './FilmSelect.css';

const FilmSelect = ({films, onFilmSelect}) => {

    const filmOptions = films.map((film, index) => {
        return <option key={index} value={index}>{film.title}</option>
    });

    const handleChange = (event) => {
        const chosenFilm = films[event.target.value]
        onFilmSelect(chosenFilm)
    }

    return (
        <select className="film-select" onChange={handleChange} defaultValue="">
            <option disabled value ="">Select a film</option>
            {filmOptions}
        </select>
    );

}

export default FilmSelect;