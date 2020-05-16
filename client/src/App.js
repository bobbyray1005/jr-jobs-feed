import React from 'react';
import Jobs from './components/Jobs';
import NavBar from './components/NavBar'

import './App.css';
const JOB_API_URI='http://localhost:4000/jobs'



async function fetchJobs(updatedCb){
  const res=await fetch(JOB_API_URI);
  const json=await res.json();
  updatedCb(json)
  console.log(json);
}
function App() {
  const [jobList,updatedJobs]=React.useState([]);
  React.useEffect(()=>{
    fetchJobs(updatedJobs);
  },[])
  return (
    <div className="App">
      <NavBar />
      <Jobs jobs={jobList}/>
    </div>
  );
}

export default App;
