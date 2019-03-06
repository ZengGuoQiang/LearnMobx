import React, { Component } from 'react';
import './App.scss';
import { extendObservable } from 'mobx';
import {IndexRouter} from 'react-router';
import { Route,withRouter,Switch,Redirect } from 'react-router-dom';
import Nav from './component/Nav/index.js';
import Home from './component/content/home/index.js';
import Buycar from './component/content/buycar/index.js';
import List from './component/content/list/index.js';
import Admin from './component/content/admin/index.js';


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

  renderBody() {
    let routelist = this.props.routes;

    let { history } = this.props.history;

    return (
            routelist.map(item => {
              console.log(item.component,item.href);
                return <Route exact={item.isExact} key={item.id} path={ item.path } component={ item.component } ></Route>;
            })
    );
  }

  render() {
    return (
      <div className="App">
        <Switch>
          { this.renderBody() }
          <Redirect to = {{pathname: '/home'}}/>
        </Switch>
          <Nav arrSort={ this.arrSort.bind(this) }></Nav>
      </div>
    );
  }
}

App.defaultProps={
  routes : [
      {id:1,path:'/home',component:Home,isExact: true},
      {id:2,path:'/service',component:List},
      {id:3,path:'/house',component:Buycar},
      {id:4,path:'/mine',component:Admin}
  ]
};

export default withRouter(App);