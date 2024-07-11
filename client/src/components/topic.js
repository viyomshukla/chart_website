import React, { useState } from "react";
import Chart from "react-google-charts";
import "./topic.css";

function Topic(props) {
    const { data } = props;
    const [searchTerm, setSearchTerm] = useState("");


    const filteredData = data.filter(topic =>
        topic.toLowerCase().includes(searchTerm.toLowerCase())
    );

   
    const item = {};
    filteredData.forEach(topic => {
        if (item[topic]) {
            item[topic] += 1;
        } else {
            item[topic] = 1;
        }
    });


    const chartdata = Object.entries(item)

    return (
        <div className="chart-container3">
            <h2 className="chart-title3">Topic chart</h2>
            <div className="chart-wrapper3">
         
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
                    placeholder="Search topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <Chart
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={[['', ''], ...chartdata]}
                    options={{
                        colors: ['Red'],
                        is3D: true,
                        animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 1200,
                        },
                    }}
                    width="100%"
                    height="400px"
                />
            </div>
        </div>
    );
}

export default Topic;
