import React from 'react';
import './App.css';
import CellGrid from "./CellGrid";

function App() {
    return (
        <div className="App">
            <div className="App-grid">
                <CellGrid height={16} width={16}/>
            </div>
        </div>
    );
}

export default App;
