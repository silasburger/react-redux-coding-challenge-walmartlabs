import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import DiscountForm from './DiscountForm';

it('matches snapshot', function () {
  let wrapper = shallow(<DiscountForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('renders without crashing', function () {
  let wrapper = mount(<DiscountForm />);
  console.log(wrapper.debug());
});

