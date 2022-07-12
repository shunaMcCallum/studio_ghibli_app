import React from 'react';

const ChartSelect = ({onChartSelect}) => {


    const handleChartChange = (event) => {
        const chosenChart = event.target.value
        onChartSelect(chosenChart)
    }
    

    return (
        <select className="chart-select" onChange={handleChartChange} defaultValue="">
            <option disabled value="">Select a chart</option>
            <option value="chart1">Pie Chart</option>
            <option value="chart2">Scatter Chart</option>
            <option value="chart3">Line Chart</option>
        </select>
    );
}

export default ChartSelect;