import React, { useState } from "react";
import { Chart } from 'react-google-charts';
import './chartintensity.css'; // Import CSS file for styling
import './likehood.css'
function LikehoodChart({data,data2}) {
    const [country,setcountry]=useState('');


    const filterdata=data2.filter((value)=>value.toLowerCase().includes(country.toLowerCase()))
    const chartData = [
        ['countries', 'Likelihood'],
        ...data.map((likehood, index) => {
            if(filterdata[index]){
                return[filterdata[index],likehood]
            }
            else
            return 0;
        })
        
    ].filter((val)=>val!=0);
    
    
    return (
        <div className="chart-container2">
           <h2 className="chart-title">Likehood Chart </h2>
            <div className="chart-wrapper">
                <input
                  style={{
                    borderRadius: "8px",
                    padding: "8px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    width: "30%",
                    
                    marginBottom:"13px"
                }}
                 type="text"
                  placeholder="Search Country..."
                  value={country}
                  onChange={(e)=>setcountry(e.target.value)}
                
                />
                <Chart
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={chartData}
                    options={{
                       
                        hAxis: {
                            title: 'countries',
                            titleTextStyle: { color: '#333' },
                            gridlines: { color: 'black' },
                        },
                        vAxis: {
                            title:'Likelihood',
                            minValue: 0,
                            gridlines: { color: '#eee' },
                        },
             
                        chartArea: {
                            width: '90%',
                            height: '60%',
                        },
                        colors: ['Green'], 
                        is3D:true,
                        animation: {
                            startup: true,
                            easing: 'bounce',
                            duration: 1600,
                        },
                    }}
                    width="100%"
                    height="350px"
                    legendToggle
                />
            </div>
        </div>
    );
}

export default LikehoodChart;
