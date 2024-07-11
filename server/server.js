const express = require("express");
const data = require("./data");
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Import cors middleware

const app = express();
app.use(cors()); // Use cors middleware

async function main() {
    const uri = "mongodb://localhost:27017/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('Project12');
        const collection = database.collection('BlackCoffer');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(data);
            console.log("Data inserted");
        } else {
            console.log("Data already exists, skipping insertion");
        }

        app.get("/getintensity", async (req, res) => {
            try {
                const finddata = await collection.find({});
                
                
       
                const results = await finddata.toArray();
                const intensities = results.filter((item) => item.country&& item.country.trim() !== '').map(item => item.intensity)
                const likelihoods = results.filter((item) => item.country&& item.country.trim() !== '').map(item => item.likelihood);
                const relevances = results.filter((item) => item.country&& item.country.trim() !== '').map(item => item.relevance);
                const countrys = results.map(item => item.country).filter(country => country&& country.trim() !== '');
                ;
                const topics = results.map(item => item.topic).filter(topic => topic && topic.trim() !== '');

                const regions = results.map(item => item.region).filter(region=>region.trim()!=='');
                // const years = results.map(item => item.end_year)

            
               
                res.json({ intensity: intensities, likelihood:likelihoods,relevance:relevances,country:countrys, topic:topics,region:regions});
            } catch (error) {
                console.log(error);
                res.status(500).send("Error retrieving data");
            }
        });

    } catch (error) {
        console.log(error);
    } 
}

main().catch(console.error);

app.listen(3000, () => {
    console.log("server started at 3000");
});
