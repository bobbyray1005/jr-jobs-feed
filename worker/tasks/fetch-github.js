var fetch=require("node-fetch");
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);
const baseUrl='https://jobs.github.com/positions.json';
//fetch all pages
async function fetchGithub(){
    var resultCount=1,onPage=0;
    const allJobs=[];
    while(resultCount>0)
    {
        const res=await fetch(`${baseUrl}?page=${onPage}`);
        const jobs=await res.json();
        allJobs.push(...jobs);
        console.log('got '+jobs.length+' jobs');
        onPage++;
        resultCount=jobs.length;

    }
    // filter junior jobs algo
    const jrJobs=allJobs.filter(job=>{
        const jobTitle=job.title.toLowerCase();
        
        if(jobTitle.includes('senior')||jobTitle.includes('sr.')||jobTitle.includes('manager')
        ||jobTitle.includes('architect')||jobTitle.includes('lead')){
            return false;
        }
        return true;
    })
    //set to redis
    const success=await setAsync('github',JSON.stringify(jrJobs));
    console.log('got total filtered '+jrJobs.length+' jobs')
    console.log(success)
    
}



module.exports=fetchGithub;