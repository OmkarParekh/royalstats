import React, { Component } from 'react';
import './carditem.css';

export default class Carditem extends Component {
  render() {
    return (
      <div>
        <div className="card-holder d-block">
          <img
            src={this.props.src}
            alt="Card-img"
            className="card-image"
          />
          <span className="card-level d-block text-center">{`LVL ${this.props.level}`}</span>
          <span className="card-elixer">4</span>
          <span className="d-block text-center image-title btn" data-toggle="modal" data-target="#exampleModalCenter" >{this.props.title}</span>
        </div>



        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      
      <div class="modal-body">
        <span className="model-title">{this.props.title}</span>
        
      </div>


    </div>
  </div>
</div>


    </div>
    )
  }
}



// <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>