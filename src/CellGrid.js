import React from "react";
import './CellGrid.css'


function createCell(row_number, cell_number) {
    return <div key={"cell-"+row_number+"-"+cell_number} className={"grid-item"}/>
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