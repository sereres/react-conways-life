import CellGrid from "./CellGrid";

describe('neighbor counting function', () => {

    it('counts center with two neighbors', () => {
        let array = [
            [true, false, false],
            [false, false, false],
            [true, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(2);
    } );

    it('counts center with one neighbor', () => {
        let array = [
            [false, false, false],
            [false, false, false],
            [true, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(1);
    } );

    it('counts center with one row neighbor', () => {
        let array = [
            [false, false, true],
            [false, false, false],
            [true, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(2);
    } );

    it('counts center with no neighbors',  () => {
        let array = [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(0);
    } );


    it('counts 3x3 left edge',  () => {
        let array = [
            [false, false, false],
            [false, false, false],
            [true, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 0, 1)).toBe(1);
    } );


    it('counts center with full',  () => {
        let array = [
            [true, true, true],
            [true, true, true],
            [true, true, true],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(8);
    } );


});