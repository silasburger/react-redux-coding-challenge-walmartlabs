import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import ToolTip from './ToolTip';

it('matches snapshot', function () {
  let wrapper = shallow(<ToolTip />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('renders without crashing', function () {
  let wrapper = mount(<ToolTip />);
  console.log(wrapper.debug());
});