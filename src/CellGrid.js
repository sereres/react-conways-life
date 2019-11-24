import React, {useState} from "react";
import './CellGrid.css'
import Cell from "./Cell";


function createCell(row_number, cell_number, cellStates, setCellStates) {
   let aliveOrDead = cellStates[row_number][cell_number];

    const setAlive = () =>  {
        let newState = [];
        for(let i = 0; i < cellStates.length; i++ ){
            newState[i] = [];
            for(let j = 0; j < cellStates[i].length; j++ ){
                newState[i][j] = cellStates[i][j]
            }
        }
        newState[row_number][cell_number] = true;
        setCellStates(newState);
        console.log("I was clicked "+row_number + " "+ cell_number);
    };

    return <Cell key={"cell-" + row_number + "-" + cell_number}
                 id={"cell-" + row_number + "-" + cell_number}
                 alive={aliveOrDead}
                 onClick={setAlive}
    />
}

function createRow(row_number, width, cellStates, setCellStates) {
    const cells = [];
    for (let i = 0; i < width; i++) {
        cells.push(createCell(row_number, i, cellStates, setCellStates))
    }

    return <div key={"row-number-" + row_number} className={"grid-container"}>
        {cells}
    </div>
}

export default function CellGrid(props) {
    let initialStates = [];
    for(let i = 0; i < props.height; i++ ){
        initialStates[i] = [];
        for(let j = 0; j < props.width; j++ ){
            initialStates[i][j] = false
        }
    }

    const [cellStates, setCellStates] = React.useState(initialStates);

    const rows = [];
    for (let i = 0; i < props.height; i++) {
        rows.push(createRow(i, props.width, cellStates, setCellStates))
    }

    return <div>
        {rows}
    </div>
}