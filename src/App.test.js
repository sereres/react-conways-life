import React from 'react';
import App from './App';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});


describe('App rendering', () => {
    it('renders without crashing', () => {
            shallow(<App/>)
        }
    );

    it('has a TimeDisplayer', () => {
        const app = shallow(<App/>);
        expect(app.find('TimeDisplayer').length).toBe(1)
    });

  it('passes prop to TimeDisplayer of date from Date()', () => {
    const dateForTest = new Date(2011, 11, 11);
    global.Date = jest.fn(() => dateForTest);

    const expectedDateProp =  dateForTest.toISOString();

    const app = shallow(<App/>);
    expect(app.find('TimeDisplayer').at(0).props().currentTime)
        .toBe(expectedDateProp)
  })
});