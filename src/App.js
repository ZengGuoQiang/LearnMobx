import React, { Component } from 'react';
import './App.scss';
import { extendObservable } from 'mobx';
import { Route,Router,withRouter,Switch,HashRouter } from 'react-router-dom';
import Nav from './component/Nav/index.js';
import Home from './component/content/home/index.js';
import Buycar from './component/content/home/index.js';
import List from './component/content/home/index.js';
import Admin from './component/content/home/index.js';


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
    let { routelist } = this.props.Route;

    let { history } = this.props.history;

    return (
      <HashRouter history={history}>
        <Switch>
          {
            routelist.map((item, i) => {
              console.log(item.component);
                return <Route path={ item.href } key={ i } component={ item.component } ></Route>;
            })
          }
          </Switch>
      </HashRouter>
    );
  }

  render() {
    return (
      <div className="App">
          {this.renderBody()}
          <Nav arrSort={ this.arrSort.bind(this) }></Nav>
      </div>
    );
  }
}

App.defaultProps={
  routes : [
      {path:'/home',component:Home,isExact: true},
      {path:'/service',component:List},
      {path:'/house',component:Buycar},
      {path:'/mine',component:Admin}
  ]
};

export default withRouter(App);