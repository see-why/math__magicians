import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Testing the home component', () => {
  it('should render correctly to the dom', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });

  it('should render without errors', () => {
    render(<Home />);
  });
});
