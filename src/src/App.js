import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreditCardForm from './CreditCardForm';
import Checkout from './Checkout';
import Result from './Result';

export default class App extends Component {

  state = {
    total: '',
    cvc: '',
  };

  getTotalFromCheckout = (CreditCardTotal) => {
    this.setState({ total: CreditCardTotal });
  };

  getCvcFromCheckout = (CreditCardCvc) => {
    this.setState({ cvc: CreditCardCvc });
  };

  render() {
    console.log(this.state.total);
    console.log(this.state.cvc);
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact path='/'
              render={(props) => <CreditCardForm {...props} totalPropsToApp={this.getTotalFromCheckout} cvcPropsToApp={this.getCvcFromCheckout} />}
            />
            <Route
              path='/checkout'
              render={(props) => <Checkout {...props} total={this.state.total}/>}
              />
            <Route
            path='/result'
            render={(props) => <Result {...props} cvc={this.state.cvc}/>}
            />
          </Switch>
        </div>
      </Router>
    );
  };
};
