import React from "react";
import './CellGrid.css'
import Cell from "./Cell";


function createCell(row_number, cell_number) {
    return <Cell key={"cell-"+row_number+"-"+cell_number} alive={false}/>
}

function createRow(row_number, width) {
    const cells = [];
    for( let i = 0; i < width; i++){
        cells.push(createCell(row_number, i))
    }

    return <div key={"row-number-"+row_number} className={"grid-container"}>
       {cells}
    </div>
}

export default function CellGrid(props) {
    const rows = [];

    for( let i = 0; i < props.height; i++ ){
        rows.push(createRow(i, props.width))
    }

    return <div>
        {rows}
    </div>
}