import React, { Component } from 'react';
import { Container, Grid, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

export default class Checkout extends Component {

  render() {
    return (
      <div>
        <Container>
          <Grid centered columns={3}>
            <Grid.Column>
              <h1 className="credit-card-form ui header center aligned">Checkout</h1>
              Total Amount:
            <Segment>
                <Dimmer active>
                  <Loader />
                </Dimmer>

                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
              </Segment>
              Payment in progress
          </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  };
};
