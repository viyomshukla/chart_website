import React, { useState } from "react";
import { Chart } from 'react-google-charts';
import './chartintensity.css'; // Import CSS file for styling

function IntensityChart(props) {
    const [country, setCountry] = useState("");
    const { data, data2 } = props;

    
    const filteredData = data2.filter((item) => item.toLowerCase().includes(country.toLowerCase()));

    const chartData = [
        ['', ''],      //this is to show how many axis
        ...data.map((intensity, index) => {
            if(filteredData[index]){
                return [filteredData[index],intensity]
            }
            else return 0
        }).filter((i)=>i!==0)
    ];

    return (
        <div className="chart-container10">
            <h2 className="chart-title">Intensity Chart</h2>
            <div className="chart-wrapper">
           
                <input
                 style={{
                    borderRadius: "8px",
                    padding: "8px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    width: "50%",
                    
                    marginBottom:"13px"
                }}
                    type="text"
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                
              
                <Chart
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={chartData}
                    options={{
                        chart: {
                            title: 'Intensity Data',
                        },
                        hAxis: {
                            title: 'Countries',
                        },
                        vAxis: {
                            title: 'Intensity',
                        },
                        animation: {
                            startup: true,
                            easing: 'linear', // Example: 'linear', 'easeInOut', 'bounce'
                            duration: 1000, // Animation duration in milliseconds
                        },
                    }}
                    width="100%"
                    height="400px"
                    legendToggle
                />
            </div>
        </div>
    );
}

export default IntensityChart;
