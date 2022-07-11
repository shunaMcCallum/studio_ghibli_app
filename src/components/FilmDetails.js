import React from 'react';
import './FilmDetails.css';

const FilmDetails = ({ film }) => {
    const peopleList = film.peopleList.map((person, index) => {
        return <li key={index}>{person.name}</li>
    })

    return (
        <div className="film-detail">
            <img id="film-image" src={film.image} alt="Film Image"></img>
            <div className="film-content">
                <h2 id="film-title">{film.title}</h2>
                <h3 id="film-original-title">{film.original_title}</h3>
                <p className="film-para"><b>Release Date:</b> {film.release_date}</p>
                <p className="film-para"><b>Running Time:</b> {film.running_time} mins</p>
                <p className="film-para"><b>Director:</b> {film.director}</p>
                <p className="film-para"><b>Producer:</b> {film.producer}</p>
                <p id="synopsis"><b>Synopsis:</b></p>
                <p className="film-para">{film.description}</p>
                <ul>{peopleList}</ul>
            </div>

        </div>
    );

}

export default FilmDetails;