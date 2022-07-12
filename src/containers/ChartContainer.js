import React from 'react';
import FilmChart from '../components/FilmChart';

const ChartContainer = ({ films }) => {
    


    const getFilmRatings = ((films) => {
        const ratings = [];

        for (const film of films) {
            ratings.push(film.rt_score)
        }

        const array0to60 = ratings.filter(rating => rating < 61);
        const array61to70 = ratings.filter(rating => rating < 71 && rating > 60);
        const array71to80 = ratings.filter(rating => rating < 81 && rating > 70);
        const array81to90 = ratings.filter(rating => rating < 91 && rating > 80);
        const array91to100 = ratings.filter(rating => rating < 101 && rating > 90);

        const array1 = ["0 - 60", array0to60.length];
        const array2 = ["61 - 70", array61to70.length];
        const array3 = ["71 - 80", array71to80.length];
        const array4 = ["81 - 90", array81to90.length];
        const array5 = ["91 - 100", array91to100.length];
        const masterArray = [["Rating Range", "Rating"], array1, array2, array3, array4, array5];

        return masterArray;
    });

    const getFilmRatings2 = ((films) => {
        let ratings = [["Release Date", "Rotten Tomato Score"]];

        for (const film of films) {
            const result = [film.release_date, Number(film.rt_score)]
            ratings.push(result)
        }

        return ratings
    });

    return (
        <div >
            <FilmChart films={films} getFilmRatings={getFilmRatings} getFilmRatings2={getFilmRatings2} />
        </div>
    );
}

export default ChartContainer;