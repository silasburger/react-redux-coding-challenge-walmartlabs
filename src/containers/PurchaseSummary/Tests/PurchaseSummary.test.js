import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import PurchaseSummary from './PurchaseSummary';

it('matches snapshot', function () {
  let wrapper = shallow(<PurchaseSummary />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('renders without crashing', function () {
  let wrapper = mount(<PurchaseSummary />);
  console.log(wrapper.debug());
});