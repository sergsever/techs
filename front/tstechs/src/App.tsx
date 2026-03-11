import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Technologies from './components/technplogies'
import TechnologyComponent from './components/technology'
import Technology from './components/technology'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  
  //const [appState, setAppState] = useState();

 

  return (
    <><div>
      
      <Routes>
        <Route path="/" element={<Technologies/>}/>
                <Route path="/technology" element={<TechnologyComponent/>}/>
                <Route path="technology/:id" element={<TechnologyComponent/>}/>
      </Routes>
      
    </div>
    <div className="App">
      <h2>App tstechs</h2>
      <Technologies/>
     </div></>
  );
}

export default App;
