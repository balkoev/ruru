import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ResultFail from './ResultFail';
import ResultSuccess from './ResultSuccess';

export default class Result extends Component {

  state = {
    checkPayment: false,
  };

  componentWillMount() {
    if (this.props.cvc === '123') {
      this.setState({
        checkPayment: true,
      });
    };
  };

  onClickRepeat = () => {
    this.props.history.push('/');
  };

  render() {
    console.log(this.state.checkPayment);
    return (
      <div>
        <Container>
          <Grid centered columns={3}>
            <Grid.Row>
              <Grid.Column>
                <h1 className="ui header center aligned">Result</h1>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid.Row>
            <Grid.Column>
              {(this.state.checkPayment) ?
                <ResultSuccess repeat={this.onClickRepeat} /> :
                <ResultFail repeat={this.onClickRepeat}/>}
            </Grid.Column>
          </Grid.Row>
        </Container>
      </div>
    );
  };
};
