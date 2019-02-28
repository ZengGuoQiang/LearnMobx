import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import {extendObservable } from 'mobx';

class App extends Component {
  constructor () {
    super();
    extendObservable(this, {
      count:0
    })
  }
  onIncrement = () => {
    this.count++;
  }
  onDecrement = () => {
    this.count--;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>{ this.count }</span>
          <button style={ { width: "100px",height:"100px",textAlign:"center",lineHeight:"100px"}} onClick={this.onIncrement}>up</button>
          <button style={{width: "100px",height:"100px",textAlign:"center",lineHeight:"100px"}} onClick={this.onDecrement}>down</button>
        </header>
      </div>
    );
  }
}

export default observer(App);