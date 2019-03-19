import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import ItemDetails from './ItemDetails';

it('matches snapshot', function () {
  let wrapper = shallow(<ItemDetails />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('renders without crashing', function () {
  let wrapper = mount(<ItemDetails />);
  console.log(wrapper.debug());
});