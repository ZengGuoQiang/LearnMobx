import React, { Component } from 'react';
import './App.scss';
import { extendObservable } from 'mobx';
import { Route,Link,withRouter } from 'react-router-dom';
import Nav from './component/Nav/index.js';
import home from './component/content/home/index.js';
import buycar from './component/content/home/index.js';
import list from './component/content/home/index.js';
import admin from './component/content/home/index.js';


class App extends Component {
  constructor () {
    super();
    extendObservable(this, {
      count:0
    });
  }
  render() {
    return (
      <div className="App">
        <Nav></Nav>
      </div>
    );
  }
}

export default withRouter(App);