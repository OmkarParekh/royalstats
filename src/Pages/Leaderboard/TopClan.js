import React, { Component } from 'react';
import uuidv4 from "uuid/v4";
import { regions } from "../../Constants";
import TableClanData from './TableClanData';
import Axios from 'axios';
import Loading from '../../Components/Loader/loading';


export default class TopClanStats extends Component {

  constructor(){
    super();
    this.state = {
      topClans : [],
      isLoading : true,
      activeCountry: '57000021'
    }
  }

  hanndleCountry = (e) => {
    this.setState({
        activeCountry : e.target.value, 
        isLoading : true
    })

    Axios.get(`/top/clans/${this.state.activeCountry}`)
        .then(res => {
            this.setState({
              topClans : res.data.items,
              isLoading : false
            })
        })
        .catch(err => this.props.history.push('/error'))
}


    render() {
      const { topClans } = this.state;
        return (
            <div className="container mt-3">
                <div class="card border-0 px-5 mb-5">
          <div class="card-body">
            <div className="row">
              <div className="col-6">
                <div className="card-title lb-card_title px-3">Top Clans</div>
              </div>
              <div className="col-6 text-right">
              <select className="custom-select lb-card_select-box border-0 bg-light"
                                        onChange = {this.hanndleCountry}>
                                        <option defaultChecked>Country</option>
                                        {regions.filter(region => region.isCountry===true)
                                        .map(region => (
                                            <option key={uuidv4()} value={region.id}>
                                                {region.name}
                                            </option>
                                        ))}
                                    </select>
              </div>
            </div>
            <hr className="m-0 my-2" />
            

           {
             this.state.isLoading &&
             <Loading />
           }

            {
              !this.state.isLoading &&
              <TableClanData 
                        topClans = {topClans}
                    />
            }
                    

                        </div>
          </div>
        </div>

        )
    }
}
