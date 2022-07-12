import React, { useState, useEffect } from 'react';
import FilmSelect from '../components/FilmSelect';
import FilmDetails from '../components/FilmDetails';
import FilmChart from '../components/FilmChart';
import './FilmContainer.css';
import FilmService from '../services/FilmService';

const FilmContainer = ({films}) => {

    // const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);

    // useEffect(() => {
    //     FilmService.getFilms()
    //         .then(data => setFilms(data));
    // }, [])

    // const getFilms = (() => {
    //     fetch('https://ghibliapi.herokuapp.com/films')
    //         .then(res => res.json())
    //         .then(data => setFilms(data));
    // })

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

    // const getFilmRatings = ((films) => {
    //     const ratings = [];
        
    //     for (const film of films) {
    //         ratings.push(film.rt_score)
    //     }

    //     const array0to60 = ratings.filter(rating => rating < 61);
    //     const array61to70 = ratings.filter(rating => rating < 71 && rating > 60);
    //     const array71to80 = ratings.filter(rating => rating < 81 && rating > 70);
    //     const array81to90 = ratings.filter(rating => rating < 91 && rating > 80);
    //     const array91to100 = ratings.filter(rating => rating < 101 && rating > 90);

    //     const array1 = ["0 - 60", array0to60.length];
    //     const array2 = ["61 - 70", array61to70.length];
    //     const array3 = ["71 - 80", array71to80.length];
    //     const array4 = ["81 - 90", array81to90.length];
    //     const array5 = ["91 - 100", array91to100.length];
    //     const masterArray = [["Rating Range", "Rating"], array1, array2, array3, array4, array5];
        
    //     return masterArray;
    // });

    // const getFilmRatings2 = ((films) => {
    //     let ratings = [["Release Date", "Rotten Tomato Score"]];

    //     for (const film of films) {
    //         const result = [film.release_date, Number(film.rt_score)]
    //         ratings.push(result)
    //     }

    //     return ratings
    // });


    return (
        <div className="film-box">
            <header className="page-header">
                <img id="header-image" src="https://www.pngitem.com/pimgs/m/83-834494_studio-ghibli-logo-vector-hd-png-download.png"></img>
            </header>
            {/* <FilmChart films={films} getFilmRatings={getFilmRatings} getFilmRatings2={getFilmRatings2} /> */}
            <FilmSelect films={films} onFilmSelect={handleFilmSelect} />
            <div>
                {selectedFilm ? <FilmDetails film={selectedFilm}/> : null}
            </div>
        </div>
    );
}

export default FilmContainer;