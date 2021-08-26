import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('the UI page', () => {
  test('displays correctly', () => {
    const component = shallow(<Calculator />);
    expect(component).toMatchSnapshot();
  });
});
