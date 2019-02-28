import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { observable,action } from 'mobx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}
class appStore {
  @observable name = 'gl'
  @action change(){
  // this.name='gaoliang'
  console.log('changed')
  }
}
export default App;