import React, { Component } from 'react';
import { Container, Button, Checkbox, Form, Grid, Message } from 'semantic-ui-react';
import { luhnAlgorithm, validAmountRegex, validCardHolderRegex, validPanRegex } from '../utilits';

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
    let { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case 'pan':
        errors.pan =
          ((luhnAlgorithm(value) % 10 === 0) || value.length !== 16)
            ? 'Invalid'
            : '';
        break;
      case 'expires':
        if (value.length === 2) {
          value += '/';
        } else if (value.length === 3 && e.keyCode === 8) {
          console.log('need fix Expires');
        };
        this.setState({ expires: value });
        break;
      default:
        break;
    };
    this.setState({ errors, [name]: value, }, () => {
    });
  };

  onClickTerms = () => {
    this.setState({ terms: !this.state.terms });
  };

  onKeyDownAmount = (e) => {
    if (validAmountRegex.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  onChangeAmount = (e) => {
    let valueToInt = parseInt(e.target.value);
    if (valueToInt <= 200) {
      this.setState({
        total: valueToInt + 10,
      });
    } else {
      this.setState({
        total: valueToInt = valueToInt * 5 / 100,
      });
    };

    this.setState({
      amount: e.target.value,
    });
  };

  onKeyDownCardHolder = (e) => {
    if (validCardHolderRegex.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    };
  };

  onKeyDownPan = (e) => {
    if (validPanRegex.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    };
  };

  onKeyDownExpires = (e) => {
    if (validPanRegex.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/checkout');
    this.sendData();
  };

  sendData = () => {
    this.props.totalPropsToApp(this.state.total);
    this.props.cvcPropsToApp(this.state.cvc);
  };

  render() {
    const { amount, total, pan, cardHolder, expires, cvc, terms } = this.state;
    const { errors } = this.state;
    console.log(this.state);
    return (
      <div>
        <Container>
          <Grid centered columns={3}>
            <Grid.Column>
              <h1 className="ui header center aligned">Payment</h1>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Amount'
                    placeholder='$'
                    name='amount'
                    value={amount}
                    onChange={this.onChangeAmount}
                    onKeyDown={this.onKeyDownAmount}
                  />
                  <Form.Input
                    label='Total'
                    placeholder='With service fee'
                    name='total'
                    value={total}
                    readOnly
                  />
                </Form.Group>
                <p>Service fee 5% of the amount, but not less than 10 rubles</p>

                <br />
                <Form.Field>
                  <Form.Input
                    label='PAN'
                    placeholder='Card number'
                    name='pan'
                    value={pan}
                    onChange={this.handleChange}
                    onKeyDown={this.onKeyDownPan}
                    maxLength='16'
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
                    onKeyDown={this.onKeyDownExpires}
                    maxLength='5'
                  />
                  <Form.Input
                    label='CVC'
                    placeholder='Code'
                    name='cvc'
                    value={cvc}
                    onChange={this.handleChange}
                    type='password'
                    maxLength='3'
                  />
                </Form.Group>
                <Form.Field>
                  <Checkbox
                    label='I agree to the Terms and Conditions'
                    name='terms'
                    onClick={this.onClickTerms}
                  />
                </Form.Field>
                <Button type='submit' disabled={!amount || !pan || !cardHolder || !expires || !cvc || !terms}>Pay</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  };
};
