import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/math__magicians">
          <Navigation />
          <Home />
        </Route>
        <Route path="/math__magicians/calculator">
          <Navigation />
          <Calculator />
        </Route>
        <Route path="/math__magicians/quote">
          <Navigation />
          <Quote />
        </Route>
      </Switch>
    );
  }
}

export default App;
