import React, {useState, useEffect} from 'react';
import './App.css';
import CellGrid from "./CellGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <CellGrid height={16} width={16}/>
      </header>
    </div>
  );
}

export default App;
