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
            <p>This chart breaks Rotten Tomato scores into four different ranges and shows the proportion of Studio Ghibli films whose ratings fall into each range.</p>

            <Chart className="chart2"
                chartType="ScatterChart"
                width="70%"
                height="250px"
                data={data2}
                options={options2}
                legendToggle
            />
            <p>This chart shows the Rotten Tomato rating for each Studio Ghibli film released over the years.</p>

        </div>
    );
}

export default FilmChart