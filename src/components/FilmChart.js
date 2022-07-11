import React from 'react';
import { Chart } from 'react-google-charts';
import './FilmChart.css';

const FilmChart = ({ getFilmRatings, films, getFilmRatings2 }) => {

    const data = getFilmRatings(films)
 
    const options = {
        title: "Studio Ghibli Films Rotten Tomato Ratings Pie Chart",
        is3D: true,
        backgroundColor: "#f7f7f7",
        marginLeft: 50,
    };

    const data2 = getFilmRatings2(films)

    const options2 = {
        title: "Rotten Tomato Scores Over the Years of Studio Ghibli",
        curvetype: "function",
        backgroundColor: "#f7f7f7",
        legend: {position: "bottom"}
    };

    return (
        <div className="charts">

            <Chart className="chart1"
                chartType="PieChart"
                data={data}
                options={options}
                width="70%"
                height={"250px"}
            />

            <Chart className="chart2"
                chartType="ScatterChart"
                width="70%"
                height="250px"
                data={data2}
                options={options2}
                legendToggle
            />

        </div>
    );
}

export default FilmChart