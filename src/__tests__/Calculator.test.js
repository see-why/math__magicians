import React from 'react';
import '@testing-library/jest-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calculator from '../components/Calculator';

configure({ adapter: new Adapter() });

describe('the UI page', () => {
  test('displays correctly', () => {
    const component = shallow(<Calculator />);
    expect(component).toMatchSnapshot();
  });
});
