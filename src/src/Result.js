import React, { Component } from 'react';
import { Segment, Label, Container, Grid, Icon, Button, Row, Header } from 'semantic-ui-react';

export default class Result extends Component {

  onClickRepeat = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Container>
          <Grid centered columns={3}>
            <Grid.Row>
              <Grid.Column>
                <h1 className="ui header center aligned">Payment</h1>
                <Container textAlign='center'>
              </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid.Row>
            <Grid.Column>
              <Segment placeholder>
                <Header icon>
                  <Icon name='smile outline green' />
                  Payment was successful
                </Header>
                <Segment.Inline>
                  <Button onClick={this.onClickRepeat} color='blue' animated='vertical'>
                    <Button.Content visible>Repeat</Button.Content>
                    <Button.Content hidden>
                      <Icon name='repeat' />
                    </Button.Content>
                  </Button>
                </Segment.Inline>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Container>
      </div>
    );
  };
};
