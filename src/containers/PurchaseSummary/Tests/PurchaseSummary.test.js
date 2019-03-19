import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import PurchaseSummary from '../index';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('purchase summary container', () => {
  it('matches snapshot', function() {
    let wrapper = shallow(<PurchaseSummary />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });

  it('renders without crashing', function() {
    let wrapper = shallow(<PurchaseSummary />);
    console.log(wrapper.debug());
  });
});
