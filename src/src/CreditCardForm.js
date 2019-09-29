import React from 'react';
import { Button, Checkbox, Form, Grid, Input } from 'semantic-ui-react';

import './CreditCardForm.css';

const CreditCardForm = () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <h1 class="credit-card-form ui header center aligned">Payment</h1>
      <Form>
      <Form.Group widths='equal'>
          <Form.Input label='Amount' placeholder='$' />
          <Form.Input label='Total' placeholder='With service fee'/>
        </Form.Group>
        <p>Service fee 5% of the amount, but not less than 10 rubles</p>
        <br/>
        <Form.Field>
          <label>PAN</label>
          <input placeholder='Card number' />
        </Form.Field>
        <Form.Field>
          <label>Cardholder</label>
          <input placeholder='Full name' />
        </Form.Field>
        <Form.Group widths='equal'>
          <Form.Input label='Expires' placeholder='mm/yy' />
          <Form.Input label='CVC' placeholder='Code' />
        </Form.Group>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Pay</Button>
      </Form>
    </Grid.Column>
  </Grid>
);

export default CreditCardForm;
