const express = require('express')
const app = express()
const cors=require('cors')
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
const port = 4000;

app.use(cors());
app.get('/jobs', async(req, res) =>{

    const jobs=await getAsync('github');
    console.log(JSON.parse(jobs).length);
    return res.send(jobs)

}); 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))