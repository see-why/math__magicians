import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../components/Navigation';

configure({ adapter: new Adapter() });

describe('the UI page', () => {
  test('displays correctly', () => {
    const component = shallow(<Navigation />);
    expect(component).toMatchSnapshot();
  });

  test('should have Home, Calculator and Quote link', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('home')).toHaveTextContent('Home');
    expect(screen.getByTestId('calculator')).toHaveTextContent('Calculator');
    expect(screen.getByTestId('quote')).toHaveTextContent('Quote');
    expect(screen.getByTestId('logo')).toHaveTextContent('Math Magicians');
  });
});
