import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreditCardForm from './CreditCardForm';
import Checkout from './Checkout';
import Result from './Result';

export default class App extends Component {

  state = {
    total: '',
  };

  callbackFunction = (CreditCardData) => {
    this.setState({ total: CreditCardData });
  };

  render() {
    console.log(this.state.total);
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact path='/'
              render={(props) => <CreditCardForm {...props} appCallback={this.callbackFunction}/>}
            />
            <Route
              path='/checkout'
              render={(props) => <Checkout {...props} total={this.state.total}/>}
              />
            <Route path='/result' component={Result} />
          </Switch>
        </div>
      </Router>
    );
  };
};
