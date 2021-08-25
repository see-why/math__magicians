import React from 'react';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navigation />
        <Calculator />
      </>
    );
  }
}

export default App;
