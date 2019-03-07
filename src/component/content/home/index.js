import React, { Component } from 'react';
import Banner from 'src/component/content/home/banner/index.js';
import Navlist from './Navlist/index.js';
import './index.scss';

class home extends Component {
    constructor (props) {
        super(props);
    }
    render(){
        return (
            <div>
                <Banner/>
            </div>
        );
    }
}
export default home;