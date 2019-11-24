import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import TimeDisplayer from "./TimeDisplayer";

function App() {

  const [currentTime, setCurrentTime] = useState((new Date()).toISOString());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime( (new Date()).toISOString() )
    }, 100)
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
       <TimeDisplayer currentTime={currentTime}/>
      </header>
    </div>
  );
}

export default App;
