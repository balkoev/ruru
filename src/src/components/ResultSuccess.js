import React, { Component } from 'react';
import { Segment, Icon, Button, Header } from 'semantic-ui-react';

export default class ResultSuccess extends Component {

  render() {
    return (
      <div>
        <Segment placeholder>
          <Header icon>
            <Icon name='check circle outline' />
            Payment was successful
          </Header>
          <Segment.Inline>
            <Button onClick={this.props.repeat} color='blue' animated='vertical'>
              <Button.Content visible>Repeat</Button.Content>
              <Button.Content hidden>
                <Icon name='repeat' />
              </Button.Content>
            </Button>
          </Segment.Inline>
        </Segment>
      </div>
    );
  };
};
