import React from "react";
import { Chart } from 'react-google-charts';


function Year(props) {
    console.log(props.data)
    const chartData = [
        ['Data Point', 'Intensity'],
        ...props.data.map((intensity, index) => [`Point ${index + 1}`, intensity])
    ];

    return (
        <div className="chart-container">
            <h2 className="chart-title">Intensity Chart (Google Charts)</h2>
            <div className="chart-wrapper">
                <Chart
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={chartData}
                    options={{
                        chart: {
                            title: 'Intensity Data',
                        },
                        hAxis:{
                        title:"index"
                        },
                        vAxis:{
                            title:"Intensity"
                        }
                    }}
            
                    width="100%"
                    height="400px"
                    legendToggle
                />
            </div>
        </div>
    );
}

export default Year;
