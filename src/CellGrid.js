import React, {useState} from "react";
import './CellGrid.css'
import Cell from "./Cell";

class CellGrid extends React.Component {
    constructor(props) {
        super(props)
        let initialStates = [];
        for (let i = 0; i < this.props.height; i++) {
            initialStates[i] = [];
            for (let j = 0; j < this.props.width; j++) {
                initialStates[i][j] = false
            }
        }
        this.state = {cellStates: initialStates}
    }

    createCell(row_number, cell_number) {
        let aliveOrDead = this.state.cellStates[row_number][cell_number];

        const setAlive = () => {
            let newState = [];
            for (let i = 0; i < this.props.height; i++) {
                newState[i] = [];
                for (let j = 0; j < this.props.width; j++) {
                    newState[i][j] = this.state.cellStates[i][j]
                }
            }
            newState[row_number][cell_number] = !aliveOrDead;
            this.setState({cellStates: newState});
            console.log("I was clicked " + row_number + " " + cell_number);
        };

        return <Cell key={"cell-" + row_number + "-" + cell_number}
                     id={"cell-" + row_number + "-" + cell_number}
                     alive={aliveOrDead}
                     onClick={setAlive}
        />
    }


    createRow(row_number) {
        const cells = [];
        for (let i = 0; i < this.props.width; i++) {
            cells.push(this.createCell(row_number, i))
        }

        return <div key={"row-number-" + row_number} className={"grid-container"}>
            {cells}
        </div>
    }

    render() {
        const rows = [];
        for (let i = 0; i < this.props.height; i++) {
            rows.push(this.createRow(i))
        }

        return <div>
            {rows}
        </div>
    }

}

export default CellGrid;