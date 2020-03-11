import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import bg from '../../assest/img/404-1.png';

export default function Error() {
    return (
        <div>
            <div className="wrap"> 
  <div className="logo"> 
    <p className="text-monospace">OOPS! - Could not Find it</p> 
    <img src={bg}
        alt="_background_img"
        className="logo-icon"
    /> 
    <div className="sub"> 
      <p><Link to='/'>Back To Home</Link></p> 
    </div> 
  </div> 
</div>

        </div>
    )
}
