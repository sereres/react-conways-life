import {configure, shallow} from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import UpdateButton from "./UpdateButton";

configure({adapter: new Adapter()});


describe('update button', () => {
    it('on click calls function passed onclick', () => {
        let hasBeenClicked = false;
        const onClickFunction = () => {
            hasBeenClicked = true;
        }
        let updateButton = shallow(<UpdateButton onClick={onClickFunction}/>);

        updateButton.simulate('click')
        expect(hasBeenClicked).toBe(true)
    })

});