import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Testing the Qoute component', () => {
  it('should render correctly to the dom', () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });

  it('should render without errors', () => {
    render(<Quote />);
  });
});
