import React, { Component } from 'react';
import { Container, Grid, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

export default class Checkout extends Component {

  componentDidMount() {
    const randomNum = Math.floor((Math.random() * (7 - 3) + 3) * 1000);
    setTimeout(() => this.props.history.push('/result'), randomNum);
  }

  render() {
    return (
      <div>
        <Container>
          <Grid centered columns={3}>
            <Grid.Column>
              <h1 className="credit-card-form ui header center aligned">Checkout</h1>
              Total Amount: {this.props.total} $
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
