import React from "react";
import "./searchItem.css"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom";


const SearchItem7=()=>{
    const navigate=useNavigate()
  const handleSearch=()=>{
    navigate("/Booking")
  }
    return(
        <div className="searchItem">
            <img src="https://airhex.com/images/airline-logos/indigo.png" alt="" className="siImg" 
            />
            <div className="siDesc">
            <h1 className="siTitle">IndiGo</h1>
        <span className="siDistance">01.50
        <FontAwesomeIcon icon={faArrowRight} className="UpDown"/>
        8.30
        </span>
       

        <span className="siTaxiOp">6 h 40 m</span>
        <span className="siSubtitle">
          3 Stops via Pune, Hydrabad and Dehli
        </span>
        <span className="siFeatures">
         
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
            </div>
            <div className="siDetails">
            <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹ 6755</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton"onClick={handleSearch}>Book Now</button>
        </div>
      </div>
     </div> 
    )
}

export default SearchItem7