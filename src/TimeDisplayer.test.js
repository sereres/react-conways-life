import React from 'react';
import {configure, shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import TimeDisplayer from "./TimeDisplayer";

configure({adapter: new Adapter()});

describe('time displayer', () => {
    it('renders without crashing', () => {
        mount(<TimeDisplayer />);
    });

    it('Renders the time passed as a prop', () => {
        const currentTime = "Time right now";
        let timeDisplayer = mount(<TimeDisplayer currentTime={currentTime}  />);

        expect(timeDisplayer.text()).toBe(currentTime)
    })
});