import React, { Component } from 'react';
import './carditem.css';
import cardImg from '../../assest/img/card-i.png';

export default class Carditem extends Component {



    


  render() {
    return (

<div>
        <div className="card-holder d-block">

      


          <img
            src={this.props.icon}
            alt="Card-img"
            className="card-image"
          />
          <span className="card-level d-block text-center">{`LVL ${this.props.level}`}</span>
          <span className="card-elixer">
            {this.props.elixer}
          </span>
          <span className="d-block text-center image-title btn" data-toggle="modal" data-target="#exampleModalCenter" >
            {this.props.name}
          </span>
        </div>

</div>

    )
  }
}

