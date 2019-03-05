import React, { Component } from 'react';
import './index.scss';
import "../../icon/iconfont.css";
import list from './Nav.json';
import {BrowserRouter, Route, NavLink,Link} from 'react-router-dom';

class Nav extends Component {
    constructor (props) {
        super(props);
        this.state = {
            navData: list.sort(function (a, b) {
                        return a.type - b.type;
                    })
        };
    }
    componentDidMount(){
        this.props.arrSort(this.state.navData);
    }
    render() {
        const len = this.state.navData.length;
        const Width = 100 / len;

            return (
            <ul className="mainNav">
                {
                    this.state.navData.map((item, i) => {
                        return <li key={i}><Link to={ item.href }><i className={ item.icon }></i><span>{ item.title }</span></Link></li>;
                        })
                }
            </ul>
        );
    }
}

export default Nav;