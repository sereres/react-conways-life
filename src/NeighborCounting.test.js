import CellGrid from "./CellGrid";

describe('neighbor counting function', () => {

    it('empty array has no neighbors', () => {
        let array = [[false]];
        const cellGrid = new CellGrid({height: 1, width: 1});
        expect(cellGrid.countNeighbors(array, 0, 0)).toBe(0);
    });

    it('full array has eight neighbors', () => {
        let array = [[true]];
        const cellGrid = new CellGrid({height: 1, width: 1});
        expect(cellGrid.countNeighbors(array, 0, 0)).toBe(8);
    });

    it('top left of almost empty array has no neighbors', () => {
       let array =  [[true, false],
                     [false, false]];
       const cellGrid = new CellGrid({height: 2, width: 2});
       expect(cellGrid.countNeighbors(array, 0, 0)).toBe(0);

    });

    it('top right of almost empty array has two neighbors', () => {
        let array =  [[true, false],
                      [false, false]];
        const cellGrid = new CellGrid({height: 2, width: 2});
        expect(cellGrid.countNeighbors(array, 0, 1)).toBe(2);

    });

    it('top right of reflected almost empty array has no neighbors', () => {
        let array =  [[false, true],
                     [false, false]];
        const cellGrid = new CellGrid({height: 2, width: 2});
        expect(cellGrid.countNeighbors(array, 0, 1)).toBe(0);

    });

    it('bottom right of almost empty array has four neighbors', () => {
        let array =  [[true, false],
                      [false, false]];
        const cellGrid = new CellGrid({height: 2, width: 2});
        expect(cellGrid.countNeighbors(array, 1, 1)).toBe(4);

    });

    it('bottom left of reflected almost empty array has four neighbors', () => {
        let array =  [[false, true],
                      [false, false]];
        const cellGrid = new CellGrid({height: 2, width: 2});
        expect(cellGrid.countNeighbors(array, 1, 0)).toBe(4);

    });

    it('top left of reflected almost empty array has two neighbors', () => {
        let array =  [[false, true],
                     [false, false]];
        const cellGrid = new CellGrid({height: 2, width: 2});
        expect(cellGrid.countNeighbors(array, 0, 0)).toBe(2);

    });

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

    it('top left of false false true true array has six neighbors', () => {
        let array =  [[false, false],
                      [true, true]];
        const cellGrid = new CellGrid({height: 2, width: 2});
        expect(cellGrid.countNeighbors(array, 0, 0)).toBe(6);

    });


});