import React from 'react';
import Chart from 'react-google-charts';
import { useState } from 'react';
import './region.css'
function RegionChart(props) {
    const { data } = props;
    const [country,setcountry]=useState('');
    const itemCounts = {};
    const filteredData = data.filter(item => item.toLowerCase().includes(country.toLowerCase()));

    filteredData.forEach(item => {
        
        if (itemCounts[item]) {
            itemCounts[item] += 1;
        } else {
            itemCounts[item] = 1;
        }
    });
    
   
    const chartData = Object.entries(itemCounts)

      
    return (
        <div className="chart-container4">
            <h2 className="chart-title4">Region Chart </h2>
            <div className="chart-wrapper4">
            <div>
                    <input
                      style={{
                        marginBottom:"12px",
                        borderRadius:"8px",
                        border: "1px solid #ccc",
                        width:"50%",
                        padding:"8px"

                    }}
                     type='text'
                     placeholder="Search country..."
                     value={country}
                     onChange={(e)=>setcountry(e.target.value)} 
                    />
                </div>
                <Chart
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[['Region', 'Count'], ...chartData]}
                    options={{
                       
                        is3D: true,
                    }}
                    width="100%"
                    height="400px"
                />
            </div>
        </div>
    );
}

export default RegionChart;
