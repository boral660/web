import React, { Component } from 'react';
import './App.css';
import style from './App.css';
import List from './List';
import Button from './Button';
import EnterTask from "./EnterTask";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: ["Сделать ту ду лист","Не умереть"]
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.term != ''){
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
    
  }

  render() {
    return (
      <div className={style.app}>
       <form  onSubmit={this.onSubmit}>
          <EnterTask term={this.state.term} par={this}/>
           <Button />
        </form>
        <List  app={this}/>
      </div>
    );
  }
}
