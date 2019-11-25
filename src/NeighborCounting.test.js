import CellGrid from "./CellGrid";

describe('neighbor counting function', () => {

    it('empty array has no neighbors', () => {
        let array = [false]
        const cellGrid = new CellGrid({height: 1, width: 1});
        expect(cellGrid.countNeighbors(array, 0, 0)).toBe(0);
    });

    it('full array has eight neighbors', () => {
        let array = [true]
        const cellGrid = new CellGrid({height: 1, width: 1});
        expect(cellGrid.countNeighbors(array, 0, 0)).toBe(8);
    });

    xit('counts center with two neighbors', () => {
        let array = [
            [true, false, false],
            [false, false, false],
            [true, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(2);
    } );

    xit('counts center with one neighbor', () => {
        let array = [
            [false, false, false],
            [false, false, false],
            [true, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(1);
    } );

    xit('counts center with one row neighbor', () => {
        let array = [
            [false, false, true],
            [false, false, false],
            [true, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(2);
    } );

    xit('counts center with no neighbors',  () => {
        let array = [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(0);
    } );


    xit('counts 3x3 left edge',  () => {
        let array = [
            [false, false, false],
            [false, false, false],
            [true, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 0, 1)).toBe(1);
    } );


    xit('counts center with full',  () => {
        let array = [
            [true, true, true],
            [true, true, true],
            [true, true, true],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(8);
    } );


});