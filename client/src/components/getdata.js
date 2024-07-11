import React, { useEffect, useState } from 'react';
import Intensitychart from './chartintensity';
import Country from './chartcountry';
import LikehoodChart from './likehoodchart';
import Relevance from './relevance';
import City from './country';
import Topic from './topic';
import RegionChart from './region';
import Year from './year';



function Func() {
    const [intensityData, setIntensityData] = useState([]);
    const [likelihoods, setlikelihoods] = useState([]);
    const [relevances, setrelevances] = useState([]);
    const [countrys, setcountrys ]= useState([]);
    const [topics, settopics] = useState([]);
    const [regions, setregions] = useState([]);
    const [years, setyears] = useState([]);
    useEffect(() => {
      
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:3000/getintensity", {
                method: "GET",
            });
            const { intensity,likelihood,country,relevance ,region,topic,city} = await res.json();
            setIntensityData(intensity||[]);
            setcountrys(country ||[]);
            setlikelihoods(likelihood ||[]);
            setrelevances(relevance ||[]);
            setregions(region||[]);
            settopics(topic||[]);
            setyears(years||[]);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            
             <Intensitychart data={intensityData} data2={countrys}/>
             <Topic data={topics}/>
            <LikehoodChart data={likelihoods} data2={countrys}/>
            <City data={countrys}/>
            
            <RegionChart data={regions}/>
            <Relevance data={relevances} data2={countrys}/> 
           
         
         
           
        </div>
    );
}

export default Func;
