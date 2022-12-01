import React, { useState } from 'react';
import d20Blue from './components/assets/BlueD20.png';
import d20Orange from './components/assets/OrangeD20.png';
import DocViewer from './components/util/doc'
import './App.css';

function App() {
  const [d20ColorBlue, setd20Color] = useState(true);
  return(
    <div className="App">
      <header className="App-header">
        <h1 style={{'text-decoration':'underline'}}>DYER?</h1>
        <img src={d20ColorBlue ? d20Blue : d20Orange} 
        className="App-logo" alt="logo" />
        <p>
          Welcome to the "Do You Even Roll?" site 
        </p>
        <button onClick={()=>setd20Color(!d20ColorBlue)}>Change D20</button>
      </header>
      <h1>Our Journey So Far:</h1>
      <DocViewer 
      // source="https://docs.google.com/document/d/1Al_emMj2uInOID2KHWak1GS7jo3psmEAQQnsZkfEM68/" 
      source="https://docs.google.com/document/d/e/2PACX-1vRX9si_Uj-4GItO9AHs8SN9TCCP4tu1CMl7awRl1fld5ROShBsVNw8rVyEpoWDc7xfHgslNQNPlvlIX/pub?embedded=true" 
      />
    </div>
  );
}

export default App;
