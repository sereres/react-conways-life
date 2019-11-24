import React, {useState, useEffect} from 'react';
import './App.css';
import CellGrid from "./CellGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <CellGrid height={5} width={3}/>
      </header>
    </div>
  );
}

export default App;
