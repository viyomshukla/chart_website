import React, { useState } from 'react';
import Chart from 'react-google-charts';

function CityChart(props) {
    const [country,setcountry]=useState('');
    const { data } = props;
    const filteredData = data.filter(item => item.toLowerCase().includes(country.toLowerCase()));
    
    const item={};
    filteredData.map((e)=>{
        if(item[e]){
            item[e]+=1
        }
        else{
            item[e]=1;
        }
    })

    const chartdata=Object.entries(item)

   
    return (
        <div className="chart-container10">
            <h2 className="chart-title">Country Chart </h2>
            <div className="chart-wrapper">
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
                    data={[['', ''], ...chartdata]} 
                    options={{
                     
                        is3D: true,
                         animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 1000,
                        },
                    
                    }}
                    width="100%"
                    height="400px"
                />
            </div>
        </div>
    );
}

export default CityChart;
