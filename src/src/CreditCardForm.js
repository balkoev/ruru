import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';

const CreditCardForm = () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <Form>
        <Form.Field>
          <label>PAN</label>
          <input placeholder='Card number' />
        </Form.Field>
        <Form.Field>
          <label>Cardholder</label>
          <input placeholder='Full name' />
        </Form.Field>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Expires' placeholder='mm/yy' />
          <Form.Input fluid label='CVC' placeholder='Code' />
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
