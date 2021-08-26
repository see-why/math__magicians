import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Link } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import App from './App';

describe('Testing the App component', () => {
  it('should render correctly to the dom', () => {
    const quote = renderer.create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
