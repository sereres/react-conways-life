import React from "react";
import './CellGrid.css'
import Cell from "./Cell";
import UpdateButton from "./UpdateButton";

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
        for (let i = 0; i < this.props.height; i++) {
            for (let j = 0; j < this.props.width; j++) {
                const neighbors = this.countNeighbors(this.state.cellStates, i, j);
                if (neighbors >= 2) {
                    nextState[i][j] = true;
                }
                if( neighbors < 2 ){
                    nextState[i][j] = false;
                }
            }

        }
        this.setState({cellStates: nextState})
    }


    countNeighbors(state, x, y) {
        let neighbors = 0;

        if(state[0]){
            neighbors = 8;
        }

        if(this.props.height > 1){
            console.log("state is " + state[x][y]);
            if(state[x][y]) {
                neighbors = 0;
            }
            else if(x===1){
                neighbors = 4;
            }
            else{
                neighbors = 2;
            }
        }

        return neighbors;
    }
}

export default CellGrid;