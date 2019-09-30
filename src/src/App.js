import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreditCardForm from './CreditCardForm';
import Checkout from './Checkout';
import Result from './Result';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={CreditCardForm} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/result' component={Result} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
