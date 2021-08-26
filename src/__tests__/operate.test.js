import '@testing-library/jest-dom';
import operate from '../logic/operate';

describe('operate functioin', () => {
  it('Addition', () => {
    expect(operate(2, 8, '+')).toBe('10');
  });

  it('Substraction', () => {
    expect(operate(10, 10, '-')).toBe('0');
  });

  it('Multiplication', () => {
    expect(operate(10, 10, 'x')).toBe('100');
  });

  it('Divition', () => {
    expect(operate(1, 1, '÷')).toBe('1');
  });

  it('Module operaration', () => {
    expect(operate(10, 3, '%')).toBe('1');
  });
});
