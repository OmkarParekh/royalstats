import React, { Component } from 'react';
import './carditem.css';



export default class Carditem extends Component {
  render() {
    const { data } = this.props;
    const card = Object.assign({}, data);
    const icon = Object.assign({}, data.iconUrls)
    return (
      <div>
        
        <div className="card-holder d-block text-center">
          <img
            src={icon.medium}
            alt="Card-img"
            className="card-image"
          />
          <span className="card-level ">{`LVL ${card.level}`}</span>
          <span className="d-block text-wrap text-center image-title" data-toggle="modal" data-target="#exampleModalCenter" >
            {card.name}
          </span>
        </div>
      </div>
    )
  }
}

