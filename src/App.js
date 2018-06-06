import React, { Component } from 'react';
import style from './App.css';
import List from './List';
import Button from './Button';
import EnterTask from "./EnterTask";
import LogIn from "./LogIn"


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
      items: [this.state.term,...this.state.items]
    });
  }
    
  }

  render() {
    return (
      <div className={style.app}>
      <header className={style.appHeader}>
      <h1 className={style.appTitle}>Welcome to(do)</h1>
      </header>
      <LogIn />
       <form onSubmit={this.onSubmit} style={{marginTop: 15}}>
          <EnterTask term={this.state.term} par={this}  />
           <Button />
        </form>
        <List  app={this}/>
      </div>
    );
  }
}
