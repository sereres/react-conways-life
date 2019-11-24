import {configure, shallow} from "enzyme";
import React from "react";
import Cell from "./Cell";

import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe('Cell', () => {
    it('renders with alive prop', () => {
        shallow(<Cell alive={false}/>)
    })
});