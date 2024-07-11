import React from "react";
import Chart from "react-google-charts";

function Country(props) {
    const chartData = [
        ['Country', 'Index'], // Headers for the chart
        ...props.data1.map((country, index) => [country, index + 1]) 
    ];

    return (
        <div className="chart-container">
            <h2 className="chart-title">Country</h2>
            <div className="chart-wrapper">
             
                <Chart
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={chartData}
                   colo
                    width="40%"
                    height="300px"
                    legendToggle
                />
            </div>
        </div>
    );
}

export default Country;
