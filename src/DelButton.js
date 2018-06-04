import React, { Component } from 'react';
import RaisedButton from 'material-ui/Button';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { index: this.props.index };
  }
  onClick = (event) => {
    this.props.items.splice(this.state.index,1);
    this.props.app.setState({
      items: this.props.items
    });
  }

  render() {
    return (
        <RaisedButton onClick={this.onClick} variant='raised' color='secondary'  style={{marginLeft: 15}} >
            Delete
        </RaisedButton>
    );
  }
}
