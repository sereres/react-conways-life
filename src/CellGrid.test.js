import {configure, render, shallow, mount} from "enzyme";
import React from "react";
import CellGrid from "./CellGrid";
import Adapter from "enzyme-adapter-react-16";
import UpdateButton from "./UpdateButton";
import App from "./App";


configure({adapter: new Adapter()});

describe('cell grid', () => {
    it('renders without crashing', () => {
        shallow(<CellGrid width={2} height={2}/>)
    });

    it('has nunmber of grid containers equal to rows', () => {
        const height = 3;
        const cellgrid = shallow(<CellGrid width={2} height={height}/>)
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

    it('when cell is clicked, cell prop is modified',  () => {
        const cellgrid = shallow(<CellGrid width={4} height={4}/>);
        const aCell = cellgrid.find('#cell-3-3');

        aCell.simulate('click');

        expect(cellgrid.state().cellStates[3][3]).toBe(true);
    });

    it('when cell is clicked twice, cell prop is false',  () => {
        const cellgrid = mount(<CellGrid width={4} height={4}/>);
        const aCell = cellgrid.find('#cell-3-3');

        aCell.simulate('click');
        aCell.simulate('click');

        expect(cellgrid.state().cellStates[3][3]).toBe(false);

        jest.clearAllMocks();
    });

    it('center cell of 3x3 false grid has 0 true neighbors', () =>{
        const cellgrid = shallow(<CellGrid width={3} height = {3}/>);
        const aCell = cellgrid.find('#cell-1-1');
        aCell.simulate('click');


        let updateButton = cellgrid.find('UpdateButton').at(0);
        updateButton.simulate('click');


        expect(cellgrid.state().cellStates[1][1]).toBe(false);
    });

    it('has an update button', () => {
        const grid = shallow(<CellGrid height={1} width={1}/>);
        expect (grid.find("UpdateButton").length).toBe(1)
    })
});