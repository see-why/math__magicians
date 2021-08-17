import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table className="TableContainer">
        <tr>
          <td className="TableCell Input" colSpan="4">0</td>
        </tr>
        <tr>
          <td className="TableCell">AC</td>
          <td className="TableCell">+/-</td>
          <td className="TableCell">%</td>
          <td className="TableCell Orange">:</td>
        </tr>
        <tr>
          <td className="TableCell">7</td>
          <td className="TableCell">8</td>
          <td className="TableCell">9</td>
          <td className="TableCell Orange">x</td>
        </tr>
        <tr>
          <td className="TableCell">4</td>
          <td className="TableCell">5</td>
          <td className="TableCell">6</td>
          <td className="TableCell Orange">-</td>
        </tr>
        <tr>
          <td className="TableCell">1</td>
          <td className="TableCell">2</td>
          <td className="TableCell">3</td>
          <td className="TableCell Orange">+</td>
        </tr>
        <tr>
          <td className="TableCell" colSpan="2">0</td>
          <td className="TableCell">.</td>
          <td className="TableCell Orange">=</td>
        </tr>
      </table>
    );
  }
}

export default Calculator;
