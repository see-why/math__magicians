import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Home />
        </Route>
        <Route path="/calculator">
          <Navigation />
          <Calculator />
        </Route>
        <Route path="/quote">
          <Navigation />
        </Route>
      </Switch>
    );
  }
}

export default App;
