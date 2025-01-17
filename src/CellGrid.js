import React from "react";
import './CellGrid.css'
import Cell from "./Cell";
import UpdateButton from "./UpdateButton";
import RunButton from "./RunButton";

class CellGrid extends React.Component {
    constructor(props) {
        super(props);
        let initialStates = this.makeClearState();
        this.state = {cellStates: initialStates};

        if (props.updateReceiver) {
            props.updateReceiver(this.setNextState)
        }
    }

    render() {
        const rows = [];
        for (let i = 0; i < this.props.height; i++) {
            rows.push(this.createRow(i))
        }

        return <div>
            {rows}
            <UpdateButton onClick={() => {
                this.setNextState()
            }}/>

            <RunButton onClick={() => {
                setInterval(() => {this.setNextState()}, 300)
            }}/>

        </div>
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


    createCell(row_number, cell_number) {
        let aliveOrDead = this.state.cellStates[row_number][cell_number];

        const setAlive = () => {
            let newState = this.copyState(this.state.cellStates);
            newState[row_number][cell_number] = !aliveOrDead;
            this.setState({cellStates: newState});
        };

        return <Cell key={"cell-" + row_number + "-" + cell_number}
                     id={"cell-" + row_number + "-" + cell_number}
                     alive={aliveOrDead}
                     onClick={setAlive}
        />
    }


    copyState(state) {
        let copiedState = [];
        for (let i = 0; i < this.props.height; i++) {
            copiedState[i] = [];
            for (let j = 0; j < this.props.width; j++) {
                copiedState[i][j] = state[i][j]
            }
        }
        return copiedState;
    }

    makeClearState() {
        return this.makeUniformState(false)
    }

    makeUniformState(uniformValue) {
        let initialStates = [];
        for (let i = 0; i < this.props.height; i++) {
            initialStates[i] = [];
            for (let j = 0; j < this.props.width; j++) {
                initialStates[i][j] = uniformValue
            }
        }
        return initialStates;
    }

    setNextState() {
        let nextState = this.copyState(this.state.cellStates);
        console.log(nextState);
        for (let i = 0; i < this.props.height; i++) {
            for (let j = 0; j < this.props.width; j++) {
                const neighbors = this.countNeighbors(this.state.cellStates, i, j);
                console.log(neighbors);
                if (neighbors === 3) {
                    nextState[i][j] = true;
                }
                if( neighbors < 2 || neighbors > 3){
                    nextState[i][j] = false;
                }
            }

        }
        console.log(nextState);
        this.setState({cellStates: nextState})
    }

    transform(totransform){
        let transformed = [];
        for (let i = 0; i < totransform[0].length; i++){
            let row = [];
            for (let j = 0; j< totransform.length; j++){
                row.push(totransform[j][i]);
            }
            transformed.push(row);
        }
        return transformed;
    }

    padrows(topad){
        let padded = [];
        let height = topad.length;
        let width = topad[0].length;
        for (let j = 0; j < height; j++) {
            let unpaddedrow = [];
            unpaddedrow = topad[j];
            let row = [];
            for (let i = 0; i < width + 2; i++) {
                if (i === 0) {
                    row.push(unpaddedrow[width - 1])
                }
                if (i > 0 && i < width + 1) {
                    row.push(unpaddedrow[i - 1])
                }
                if (i === width + 1) {
                    row.push(unpaddedrow[0])
                }
            }
            padded.push(row)
        }
        return padded;
    }

    padArray(startarray){
        let paddedrows = this.padrows(startarray);

        let flippedrows = this.transform(paddedrows);

        let paddedcolumns = this.padrows(flippedrows);

        let paddedarray = this.transform(paddedcolumns);
        //console.log(paddedarray);
        return paddedarray;
    }

    countNeighbors(state, x, y) {
        let neighbors = 0;
        let paddedArray = this.padArray(state);
        for(let i = 0; i < 3; i++){
            for(let j=0; j<3; j++){
                if(paddedArray[x+i][y+j]){
                    neighbors++;
                }
            }
        }
        if(paddedArray[x+1][y+1]){
            neighbors--;
        }
        return neighbors;
    }
}

export default CellGrid;