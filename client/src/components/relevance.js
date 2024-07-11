import React, { useState } from "react";
import './relvance.css'
import Chart from "react-google-charts";
function Relevance({data,data2}){
    const [country,setcountry]=useState("");

    const filteredData2 = data2.filter((item) => item.toLowerCase().includes(country.toLowerCase()));   
     const chartdata=[
        ['Data Point', 'Relevance'],
        ...data.map((relevance,index)=>{
            console.log("hi",filteredData2[index])
            if(filteredData2[index]){
                return [filteredData2[index],relevance]
            }
            else{
                return -9
            }
        }).filter(item => item !== -9) 
        ]    
    return(
        <div className="chart-container5">
            <h2 className="chart-title5">Relevance Chart</h2>
            <div className="chart-wrapper5">
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
                placeholder="Search country..."
                value={country}
                onChange={(e)=>setcountry(e.target.value)}
                
                
                />
                <Chart
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={chartdata}
                    options={{
                        
                        hAxis: {
                            title: 'countries',
                            titleTextStyle: { color: '#333' },
                            gridlines: { color: 'black' },
                        },
                        vAxis: {
                            title: 'Relevance',
                            minValue: 0,
                            gridlines: { color: '#eee' },
                        },
             
                        chartArea: {
                            width: '80%',
                            height: '70%',
                        },
                        colors: ['Orange'], 
                        lineWidth:2.7,
                    
                        animation:{
                            statup:true,
                            ease:"bounce",
                            duration:1800,
                           

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
export default Relevance;