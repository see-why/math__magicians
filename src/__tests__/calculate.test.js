import '@testing-library/jest-dom';
import calculate from '../logic/calculate';

describe('calculate functioin', () => {
  const obj = {};
  const button = '10';

  it('Intialize the obj', () => {
    const newObj = { next: '10', total: null };
    expect(calculate(obj, button)).toEqual(newObj);
  });

  it('When a second value in press', () => {
    const obj = { next: '10', total: null };
    const newObj = { next: '1010', operation: undefined, total: null };
    expect(calculate(obj, button)).toEqual(newObj);
  });

  it('When operator is press', () => {
    const obj = { next: '10', total: null };
    const newObj = { next: null, operation: '+', total: '10' };
    const button = '+';
    expect(calculate(obj, button)).toEqual(newObj);
  });

  it('When a second number is pressed', () => {
    const obj = { next: null, operation: '+', total: '10' };
    const newObj = { next: '3' };
    const button = '3';
    expect(calculate(obj, button)).toEqual(newObj);
  });

  it('When a equal is pressed', () => {
    const obj = { next: '3', operation: '+', total: '10' };
    const newObj = { next: null, operation: null, total: '13' };
    const button = '=';
    expect(calculate(obj, button)).toEqual(newObj);
  });

  it('When a AC key is pressed', () => {
    const obj = {
      equalSign: true, next: null, operation: null, total: '13',
    };
    const newObj = { next: null, operation: null, total: null };
    const button = 'AC';
    expect(calculate(obj, button)).toEqual(newObj);
  });
});
