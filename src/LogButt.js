import React, { Component } from 'react';
import RaisedButton from 'material-ui/Button';

export default class LogButt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <RaisedButton type='sumbit' variant='raised' color='primary' style={{marginRight: 0}}>
            Login
        </RaisedButton>
    );
  }
}
