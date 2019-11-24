import {configure, shallow, mount} from "enzyme";
import React from "react";
import CellGrid from "./CellGrid";
import Adapter from "enzyme-adapter-react-16";


configure({adapter: new Adapter()});

function touchCell(cellgrid, x, y) {
    const aCell1 = cellgrid.find("#cell-" + x + "-" + y);
    aCell1.simulate('click');
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

    it('center cell of 3x3 grid becomes true if it has three true neighbors', () => {
        const cellgrid = shallow(<CellGrid width={3} height={3}/>);
        touchCell(cellgrid, 0, 0);
        touchCell(cellgrid, 0, 1);
        touchCell(cellgrid, 0, 2);

        let updateButton = cellgrid.find('UpdateButton').at(0);
        updateButton.simulate('click');

        expect(cellgrid.state().cellStates[1][1]).toBe(true);
    });

    xit('on 4x4 center cell of 3x3 grid becomes true if it has three true neighbors', () => {
        const cellgrid = shallow(<CellGrid width={4} height={4}/>);
        touchCell(cellgrid, 1, 1);
        touchCell(cellgrid, 1, 2);
        touchCell(cellgrid, 1, 3);

        let updateButton = cellgrid.find('UpdateButton').at(0);
        updateButton.simulate('click');

        expect(cellgrid.state().cellStates[2][2]).toBe(true);
    });



});