import {configure, shallow} from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import UpdateButton from "./UpdateButton";
import RunButton from "./RunButton";

configure({adapter: new Adapter()});


describe('update button', () => {
    it('on click calls function passed onclick', () => {
        let hasBeenClicked = false;
        const onClickFunction = () => {
            hasBeenClicked = true;
        };
        let updateButton = shallow(<UpdateButton onClick={onClickFunction}/>);

        updateButton.simulate('click');
        expect(hasBeenClicked).toBe(true)
    })

});

describe('run button', () => {
    it('on click calls function passed onclick', () => {
        let hasBeenClicked = false;
        const onClickFunction = () => {
            hasBeenClicked = true;
        };
        let runButton = shallow(<RunButton onClick={onClickFunction}/>);

        runButton.simulate('click');
        expect(hasBeenClicked).toBe(true);
    });


});
