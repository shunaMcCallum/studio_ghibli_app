import React from 'react';
import { Chart } from 'react-google-charts';
import './FilmChart.css';

const FilmChart = ({ films, pieChartData, scatterChartData, lineChartData, bubbleChartData, selectedChart }) => {

    const dataPie = pieChartData(films);
    const optionsPie = {
        title: "Studio Ghibli Films Rotten Tomato Ratings Pie Chart",
        is3D: true,
    };

    const dataScatter = scatterChartData(films);
    const optionsScatter = {
        title: "Rotten Tomato Scores Over the Years of Studio Ghibli",
        curvetype: "none",
        legend: {position: "bottom"}
    };

    const dataLine = lineChartData(films);
    const optionsLine = {
        title: "Film Lengths Over the Years of Studio Ghibli",
        curveType: "function",
        legend: {position: "bottom"}
    }

    const dataBubble = bubbleChartData(films);
    const optionsBubble = {
        title: "Bubbles of Rotten Tomatoes Scores and Film Lengths",
        hAxis: { title: "Release Date" },
        vAxis: { title: "Rotten Tomatoes Score" },
        colorAxis: { colors: ['yellow', 'red'] },
    }

    const selectChart = () => {
        if (selectedChart === "chart1") {
            return (
                <div className="chart-container">
                    <div className="chart">
                        <Chart className="chart1"
                            chartType="PieChart"
                            data={dataPie}
                            options={optionsPie}
                            width={"100vh"}
                            height={"50vh"}
                        />
                    </div>
                    <p>This chart breaks Rotten Tomato scores into four different ranges and shows the proportion of Studio Ghibli films whose ratings fall into each range.</p>
                </div>
            )
        } else if (selectedChart === "chart2") {
            return (
                <div className="chart-container">
                    <div className="chart">
                        <Chart className="chart2"
                            chartType="ScatterChart"
                            width={"170vh"}
                            height={"50vh"}
                            data={dataScatter}
                            options={optionsScatter}
                            legendToggle
                        />
                    </div>
                    <p>This chart shows the Rotten Tomato rating for each Studio Ghibli film released over the years.</p>
                </div>
            )
        } else if (selectedChart === "chart3") {
            return (
            <div className="chart-container">
                <div className="chart">
                    <Chart className="chart3"
                        chartType="LineChart"
                        width={"190vh"}
                        height={"70vh"}
                        data={dataLine}
                        options={optionsLine}
                        legendToggle
                    />
                    </div>
                    <p>This chart shows the running times for each Studio Ghibli film released over the years.</p>
                </div>
            )
        } else if (selectedChart === "chart4") {
            return (
                <div className="chart-container">
                    <div className="chart">
                        <Chart className="chart3"
                            chartType="BubbleChart"
                            width={"190vh"}
                            height={"100vh"}
                            data={dataBubble}
                            options={optionsBubble}
                            legendToggle
                        />
                    </div>
                    <p>This chart shows the running times against the Rotten Tomatoes scores for each Studio Ghibli film.</p>
                </div>
            )
        }
        else {
            return null
        }
    }

    return (
        <>
            {selectChart()}
        </>
    );
}

export default FilmChart