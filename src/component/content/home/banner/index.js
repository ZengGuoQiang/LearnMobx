/* eslint-disable no-undef */
import React, { Component } from 'react';
import './index.scss';
import img1 from 'src/img/1.png';
import img2 from 'src/img/2.jpg';
import data from './banner.json';

class banner extends Component{
    constructor () {
        super();
        this.state = {
            options:{
                        type:'fade',
                        areax:'375',
                        data:data.sort(function (a, b) {
                            return a.type - b.type;
                        }),
                    }
        };
        this.renderBanner = this.renderBanner.bind(this);
    }
    renderBanner(){
        this.state.options.data.push(this.state.options.data[0]);
        return(
            <ul>
                {
                    this.state.options.data.map((item,i) => {
                        return (
                                <li key={i} style={{width:this.state.options.areax===""?$(document.body).width() + 'px':this.state.options.areax+'px'}}>
                                    <a href={item.path}>
                                        <img src={item.img}/>
                                    </a>
                                </li>
                                );
                    })
                }
            </ul>
        );
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.orderStatus !== nextState.orderStatus){
            return true;
        }
        return false;
    }
    componentWillMount(){
    }
    componentDidMount(){
        this.Carousel();
    }
    Carousel(){
        var len = this.state.options.data.length;

        if(this.state.options.type === "fade"){
            setInterval(function(){
                var left = $('.banner ul li').position().left;
                var width = $('.banner ul li').width();
            
                console.log(left+ (len-1)*width);
                if(left+ (len-1)*width >= 0){
                    $('.banner ul li').css('left',left-20+'px');
                }else{
                    $('.banner ul li').css('left',left+ (len-1)*width+'px');
                }
            },200);
        }else if(this.state.options.type === "linear"){
            setInterval(function(){
                var left = $('.banner ul li').position().left;
                var width = $('.banner ul li').width();
            
                console.log(left+ (len-1)*width);
                if(left+ (len-1)*width >= 0){
                    $('.banner ul li').css('left',left-width+'px');
                }else{
                    $('.banner ul li').css('left',left+ (len-1)*width+'px');
                }
            },200);
        }
    }
    render(){


        return (
            <div className="banner">
                    {this.renderBanner()}
                    {/*<ul> <li style={{width:'375px'}}>
                        <a>
                            <img src={img1}/>
                        </a>
                    </li>
                    <li style={{width:'375px'}}>
                        <a href="#">
                            <img src={img2}/>
                        </a>
                    </li> 
                </ul>*/}
            </div>
        );
    }
}

export default banner;