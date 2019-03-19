import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import ExpandableItem from './ExpandableItem';

it('matches snapshot', function () {
  let wrapper = shallow(<ExpandableItem />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('renders without crashing', function () {
  let wrapper = mount(<ExpandableItem />);
  console.log(wrapper.debug());
});