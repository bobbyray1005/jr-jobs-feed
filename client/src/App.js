import React from 'react';
import Jobs from './components/Jobs';

import './App.css';

const mockJobs=[
  {title:'SWE3',company:'Apple'},
  {title:'SWE3',company:'Google'},
  {title:'SWE4',company:'Apple'}
  
]
function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs}/>
    </div>
  );
}

export default App;
