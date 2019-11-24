import CellGrid from "./CellGrid";

describe('neighbor counting function', () => {

    it('counts center correctly with two neighbors', () => {
        let array = [
            [true, false, false],
            [false, false, false],
            [true, false, false],
        ];

        const cellGrid = new CellGrid({height: 3, width: 3});

        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(2);
    } );
});