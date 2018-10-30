import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/header.css';

export default class Header extends Component{
  render(){
    return(
      <div class = "container">
      <div> Melee Machine Learning </div>
        <div class = "row">
          <div class = "col-lg-3 col-lg-offset-1 text-center">
            <Link to = "/" > Home </Link>
            <Link to = "/about" > About </Link>
            <Link to = "/contact" > Contact </Link>
          </div>
        </div>
      </div>
    );
  }
}
