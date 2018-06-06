import React, { Component } from 'react';
import RaisedButton from 'material-ui/Button';

export default class RegButt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <RaisedButton type='sumbit' variant='raised' color='secondary' style={{marginRight: 25}}>
            Register
        </RaisedButton>
    );
  }
}
