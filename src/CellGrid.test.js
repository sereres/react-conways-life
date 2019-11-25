import {configure, shallow, mount} from "enzyme";
import React from "react";
import CellGrid from "./CellGrid";
import Adapter from "enzyme-adapter-react-16";
import RunButton from "./RunButton";


configure({adapter: new Adapter()});

function touchCell(cellgrid, x, y) {
    const aCell1 = cellgrid.find("#cell-" + x + "-" + y);
    aCell1.simulate('click');
}

function expectStatesAreEqual(givenStates, expectedState) {
    let match = true;
    for (let i = 0; i < expectedState.length; i++) {
        for (let j = 0; j < expectedState[i].length; j++) {
            if (givenStates[i][j] !== expectedState[i][j]) {
                console.log("Cell " + i + "," + j + " was "
                    + givenStates[i][j] + " not " + expectedState[i][j]);
                match = false
            }
        }
    }
    expect(match).toBe(true)
}

function setInitialState(cellgrid, initialState) {
    for (let i = 0; i < initialState.length; i++) {
        for (let j = 0; j < initialState[i].length; j++) {
            if (initialState[i][j]) {
                touchCell(cellgrid, i, j)
            }
        }
    }

}

describe('cell grid', () => {
    it('renders without crashing', () => {
        shallow(<CellGrid width={2} height={2}/>)
    });

    it('has nunmber of grid containers equal to rows', () => {
        const height = 3;
        const cellgrid = shallow(<CellGrid width={2} height={height}/>);
        expect(cellgrid.find('.grid-container').length).toBe(height)
    });

    it('row has number of grid items equal to width 4', () => {
        const width = 4;
        const cellgrid = shallow(<CellGrid width={width} height={4}/>);
        const firstRow = cellgrid.find('.grid-container').at(0);
        expect(firstRow.find('Cell').length).toBe(width)
    });

    it('row has number of grid items equal to width 8', () => {
        const width = 8;
        const cellgrid = shallow(<CellGrid width={width} height={4}/>);
        const firstRow = cellgrid.find('.grid-container').at(0);
        expect(firstRow.find('Cell').length).toBe(width)
    });

    it('when cell is clicked, cell prop is modified', () => {
        const cellgrid = shallow(<CellGrid width={4} height={4}/>);
        touchCell(cellgrid, 3, 3);

        expect(cellgrid.state().cellStates[3][3]).toBe(true);
    });

    it('has an update button', () => {
        const grid = shallow(<CellGrid height={1} width={1}/>);
        expect(grid.find("UpdateButton").length).toBe(1)
    });

    it('has a run button', () => {
        const grid = shallow(<CellGrid height={1} width={1}/>);
        expect(grid.find("RunButton").length).toBe(1)
    });

    xit('clicking run button toggles run state on', () => {
        const cellgrid = mount(<CellGrid width={1} height={1}/>);
        const runButton = cellgrid.find('#run-button');

        runButton.simulate('click');
        expect(cellgrid.state().runToggle).toBe(true);
        jest.clearAllMocks();
    });

    it('when cell is clicked twice, cell prop is false', () => {
        const cellgrid = mount(<CellGrid width={4} height={4}/>);

        const aCell = cellgrid.find('#cell-3-3');
        aCell.simulate('click');
        aCell.simulate('click');

        expect(cellgrid.state().cellStates[3][3]).toBe(false);

        jest.clearAllMocks();
    });

    it('center cell of 3x3 becomes false if it has no true neighbors', () => {
        const cellgrid = shallow(<CellGrid width={3} height={3}/>);
        touchCell(cellgrid, 1, 1);


        let updateButton = cellgrid.find('UpdateButton').at(0);
        updateButton.simulate('click');


        expect(cellgrid.state().cellStates[1][1]).toBe(false);
    });

    it('true row of 3x3 grid turns whole grid true', () => {
        const cellgrid = shallow(<CellGrid width={3} height={3}/>);

        const initialState = [
            [true, true, true],
            [false, false, false],
            [false, false, false],
        ];
        setInitialState(cellgrid, initialState);

        let updateButton = cellgrid.find('UpdateButton').at(0);
        updateButton.simulate('click');

        const expectedState = [
            [true, true, true],
            [true, true, true],
            [true, true, true],
        ];
        expectStatesAreEqual(cellgrid.state().cellStates, expectedState)
    });

    it('on 4x4 grid a true row of 3 becomse a true column of 3', () => {
        const cellgrid = shallow(<CellGrid width={4} height={4}/>);

        const initialState = [
            [false, false, false, false],
            [false, true, true, true],
            [false, false, false, false],
            [false, false, false, false],
        ];
        setInitialState(cellgrid, initialState);

        let updateButton = cellgrid.find('UpdateButton').at(0);
        updateButton.simulate('click');

        const expectedState = [
            [false, false, true, false],
            [false, false, true, false],
            [false, false, true, false],
            [false, false, false, false],
        ];

        expectStatesAreEqual(cellgrid.state().cellStates, expectedState)
    });

    it('all true array becomes false', () => {
        const cellgrid = shallow(<CellGrid width={1} height={1}/>);

        const initialState = [
            [true]
        ];
        setInitialState(cellgrid, initialState);

        let updateButton = cellgrid.find('UpdateButton').at(0);
        updateButton.simulate('click');

        const expectedState = [
            [false]
        ];
        expectStatesAreEqual(cellgrid.state().cellStates, expectedState)
    });

    it('three unconnected neighbors on 4x4 grid turns cell true', () => {
        const cellgrid = shallow(<CellGrid width={4} height={4}/>);

        const initialState = [
            [false, false, true, false],
            [true, false, false, false],
            [false, true, false, false],
            [false, false, false, false],
        ];
        setInitialState(cellgrid, initialState);

        let updateButton = cellgrid.find('UpdateButton').at(0);
        updateButton.simulate('click');

        const expectedState = [
            [false, false, false, false],
            [false, true, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
        expectStatesAreEqual(cellgrid.state().cellStates, expectedState)
    });

});