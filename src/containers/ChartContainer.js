import React, { useState } from 'react';
import FilmChart from '../components/FilmChart';
import ChartSelect from '../components/ChartSelect';
import './ChartContainer.css';

const ChartContainer = ({ films }) => {

    const [selectedChart, setSelectedChart] = useState([]);

    const handleChartSelect = (chart) => {
        setSelectedChart(chart);
    }

    const pieChartData = ((films) => {
        const ratings = [];

        for (const film of films) {
            ratings.push(film.rt_score);
        }

        // pie chart requires data to be arranged into arrays - each array becomes a slice of the pie
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
        const data = [["Rating Range", "Rating"], array1, array2, array3, array4, array5];

        return data;
    });

    const scatterChartData = ((films) => {
        let data = [["Release Date", "Rotten Tomato Score"]];

        for (const film of films) {
            const result = [`${film.release_date} (${film.title})`, Number(film.rt_score)]
            data.push(result)
        }

        return data;
    });

    const lineChartData = ((films) => {
        let data = [["Release Date", "Film Length (mins)"]];

        for (const film of films) {
            const result = [`${film.release_date} (${film.title})`, Number(film.running_time)]
            data.push(result)
        }

        return data;
    });

    const bubbleChartData = ((films) => {
        let data = [["Title", "Release Date", "Rotten Tomato Score", "Rotten Tomato Score", "Length"]]

        for (const film of films) {
            const result = [film.title, Number(film.release_date), Number(film.rt_score), Number(film.rt_score), Number(film.running_time)]
            data.push(result)
        }

        return data;

    })


    return (
        <div className="chart-container">
            <h2>Welcome to the Charts Page!</h2>
            <p>Choose a chart from the dropdown below to see some really interesting Studio Ghibli film statistics!</p>
            <ChartSelect onChartSelect={handleChartSelect} />
            {/* charts only display if "selectedChart" contains a value - values are matched with the relevant chart in FilmSelect */}
            {selectedChart ? < FilmChart selectedChart={selectedChart} films={films} pieChartData={pieChartData}
                scatterChartData={scatterChartData} lineChartData={lineChartData} bubbleChartData={bubbleChartData} /> : null}
        </div>
    );
}

export default ChartContainer;