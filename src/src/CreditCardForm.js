import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Message } from 'semantic-ui-react';

import './CreditCardForm.css';

function luhnAlgorithm(digits) {
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let cardNum = parseInt(digits[i]);

    if ((digits.length - i) % 2 === 0) {
      cardNum = cardNum * 2;

      if (cardNum > 9) {
        cardNum = cardNum - 9;
      };
    };

    sum += cardNum;
  };

  return sum % 10 === 0;
};

const validAmountRegex = RegExp(/[a-zA-Z_;:!@#$%^&*()_+=\[\]\{\}\'\"\`\<\>\,\~\?\-\/]$/);
const validCardHolderRegex = RegExp(/[0-9;:!@#$%^&*()_+=\[\]\{\}\'\"\`\<\>\,\~\?\-\/]$/);

export default class CreditCardForm extends Component {

  state = {
    amount: '',
    total: '',
    pan: '',
    cardHolder: '',
    expires: '',
    cvc: '',
    terms: false,
    errors: {
      pan: '',
    },
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'pan':
        errors.pan =
          (luhnAlgorithm(value) % 10 === 0)
            ? 'Invalid'
            : '';
        break;
      default:
        break;
    };

    this.setState({ errors, [name]: value, }, () => {
      console.log(errors);
    });
  };

  onClickTerms = () => {
    this.setState({ terms: !this.state.terms });
  };

  onKeyDownAmount = (e) => {
    if (validAmountRegex.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    };
  };

  onKeyDownCardHolder = (e) => {
    if (validCardHolderRegex.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    };
  }

  render() {
    const { amount, total, pan, cardHolder, expires, cvc } = this.state;
    const { errors } = this.state;

    return (
      <div>
        <Grid centered columns={3}>
          <Grid.Column>
            <h1 className="credit-card-form ui header center aligned">Payment</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Amount'
                  placeholder='$'
                  name='amount'
                  value={amount}
                  onChange={this.handleChange}
                  onKeyDown={this.onKeyDownAmount}
                />
                <Form.Input
                  label='Total'
                  placeholder='With service fee'
                  name='total'
                  value={total}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <p>Service fee 5% of the amount, but not less than 10 rubles</p>

              <br />
              <Form warning>
                <Form.Field>
                  <Form.Input
                    label='PAN'
                    placeholder='Card number'
                    name='pan'
                    value={pan}
                    onChange={this.handleChange}
                  />
                  {errors.pan.length > 0 &&
                    <Message
                      warning
                      header='Card failed validation'
                      list={[
                        'Number must contain 10 or 16 characters',
                        'Misspelling spelling',
                      ]}
                    />}
                </Form.Field>
              </Form>
              <Form.Field>
                <Form.Input
                  label='Card Holder'
                  placeholder='Full name'
                  name='cardHolder'
                  value={cardHolder}
                  onChange={this.handleChange}
                  onKeyDown={this.onKeyDownCardHolder}
                />
              </Form.Field>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Expires'
                  placeholder='mm/yy'
                  name='expires'
                  value={expires}
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='CVC'
                  placeholder='Code'
                  name='cvc'
                  value={cvc}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Field>
                <Checkbox
                  label='I agree to the Terms and Conditions'
                  name='terms'
                  onClick={this.onClickTerms}
                />
              </Form.Field>
              <Button type='submit'>Pay</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  };
};
