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
  constructor (props) {
    super(props);
    this.state = {
      RouteContent:[]
    };
    this.arrSort = this.arrSort.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  arrSort(RouteContent){
    this.setState(() => ({RouteContent:RouteContent}));
  }

  renderBody(arr){
    return (
      arr.map((item,i) => {
        console.log(arr,item.href, i ,item.component);
        return <Route path={item.href} key={i} component={item.component} ></Route>;
      })
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderBody(this.state.RouteContent)}
        <Nav arrSort = {this.arrSort.bind(this)}></Nav>
      </div>
    );
  }
}

export default withRouter(App);