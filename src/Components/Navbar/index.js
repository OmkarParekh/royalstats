import React, { Component } from "react";
import Logo from "../../logo.jpeg";
import { Link } from 'react-router-dom';


export default class extends Component {
  constructor(){
    super();
    this.state = {
      selectOp : 'player'
    }
  }

  handleSearchData = (event) => {
    if(!event.target.value){
      console.log("err");
    }
    else{
      localStorage.setItem(this.state.selectOp, event.target.value)
    }
  }
  

  render = () => (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container">
          <span className="navbar-brand">
            <img src={Logo} alt="logo" className="mr-2" width="50" height="50" />
            <div className="d-md-inline-block d-none">
              <div className="align-middle d-inline text-monospace">Royal Stats</div>
            </div>
          </span>
          <div className="ml-auto">
            <div className="row">
              <div className="col-6">
                <div className="d-inline-block">
                  <span data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-search align-middle"></i>
                  </span>
                </div>
              </div>
              <div className="col-6">
                <button
                  className="navbar-toggler ml-auto border-0 d-block"
                  type="button"
                  onClick={this.props.toggleSidebar}
                >
                  <i className="fa fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>




      <div className="modal fade" id="exampleModal" tabIndex={1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Search Royale...</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">


              <form>
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control"
                      onChange={(e) => {
                        this.setState({selectOp : e.target.value})
                      }}
                    >
                      <option value="player" defaultChecked>Player</option>
                      <option value="clan">Clan</option>
                    </select>
                  </div>
                  <div className="form-group col">
                    <label htmlFor="inputTag">Tag</label>
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter Tag" 
                    id="inputTag" 
                    onChange={this.handleSearchData}
                    />
                  </div>
                </div>
              </form>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-dark">
              <Link to={`/${this.state.selectOp}`} >
               <i className="fas fa-search"></i> Search
               </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}
