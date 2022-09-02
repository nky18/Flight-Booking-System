import React from "react";
import "./searchItem.css"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom";


const SearchItem1=()=>{

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
        <span className="siDistance">15.22
        <FontAwesomeIcon icon={faArrowRight} className="UpDown"/>
        19.20
        </span>
        <span className="siTaxiOp">3 h 58 m</span>
        <span className="siSubtitle">
        Non Stop
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
          <span className="siPrice">₹ 7955</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleSearch}>Book Now</button>
        </div>
      </div>
     </div> 
    )
}

export default SearchItem1