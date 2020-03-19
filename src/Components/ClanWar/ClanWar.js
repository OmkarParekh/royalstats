import React, { Component } from "react";
import Img1 from "./A_Char_King_04 1.png";
import Img2 from "./trophy-ribbon 1.png";
import Img3 from "./social 1.png";
import Img4 from "./social 2.png";
import Img5 from "./images (1) 1.png";
import "../App.css";
import Axios from 'axios'


export default class clanwar extends Component {
    constructor() {
        super()
        this.state = {
            
            data: [],
            clan:[],
            pa:[]
       
        }
    }
    async componentDidMount(){
        const res = await Axios.get('https://royal-stats.herokuapp.com/clan/8C0VQGQQ/war')
        const data = res.data;
        const setData = this.setState({
            data:data,
            clan:data.clan,
            pa:data.participants
           
          
        });
        console.log(setData)
      }
    render() {
        const {data,clan}=this.state;
        return (
            <div>{ 
            <div>{(data.state === "notInWar")? 
            <center>
            <div className="container" id="con">
             <h2> Clan is Not in War !</h2>
            </div>
            </center>
          :
            <div className="container py-3">
            <div className="row">
              <div className="img">
                <img src={Img1} className="img1" alt="" />
              </div>
              <div className="clan__wrapper m-3">
                <h2 className="clan__name">{clan.name}</h2>
                <h6 className="clan__tag">{clan.tag}</h6>
              </div>
              <div className="btn__wrapper ml-auto my-3">
                <button className="btn">{data.state}</button>
              </div>
            </div>
            <div className="container my-5 p-3">
              <center>
                <div className="score__wrapper row mx-auto">
                  <div className=" ml-5">
                    <img src={Img2} className="img2" alt="" />
                  </div>
                  <div className="img2__content m-3">
                    <h5 className="clan__score">Clan Score</h5>
                    <h6 className="clan__points">{clan.clanScore}</h6>
                  </div>
                  <div className="img3 ml-5">
                    <img src={Img3} className="img3" alt="" />
                  </div>
                  <div className="img3__content m-3">
                    <h5 className="clan__score">Participants</h5>
                    <h6 className="clan__points">{clan.participants}</h6>
                  </div>
                  <div className="img4 ml-5">
                    <img src={Img4} className="img4" alt="" />
                  </div>
                  <div className="img4__content m-3">
                    <h5 className="clan__score">Battles Played</h5>
                    <h6 className="clan__points">{clan.battlesPlayed}</h6>
                  </div>
                  <div className="img5 ml-5">
                    <img src={Img5} className="img5" alt="" />
                  </div>
                  <div className="img5__content m-3">
                    <h5 className="clan__score">Wins</h5>
                    <h6 className="clan__points">{clan.wins}</h6>
                  </div>
                </div>
              </center>
            </div>
            <div className="container my-5">
              <h2>Participants: </h2>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Name</th>
                    <th scope="col">Cards Earned</th>
                    <th scope="col">Battle Played</th>
                  </tr>
                </thead>
                <tbody>{
                    this.state.pa.map(item=>
                  
                        <tr>
                        <th scope="row">{item.index}</th>
                        <td>{item.name}</td>
                        <td>{item.cardsEarned}</td>
                        <td>{item.battlesPlayed}</td>
                      </tr>
        
                    )
                
    }</tbody>
              </table>
            </div>
          </div>
             }</div>
               
            }       
            </div>
        )
    }
}