import React from "react";
import "./searchItem.css"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom";



const SearchItem3=()=>{
    const navigate=useNavigate()
  const handleSearch=()=>{
    navigate("/Booking")
  }
    return(
        <div className="searchItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-stCjMPOmvBq2j4TN-0VrtUMUdWyW6yrKXlCNnRzqG5t2n7DKHFbtAr2UxGikj1kF0xw&usqp=CAU" alt="" className="siImg" 
            />
            <div className="siDesc">
            <h1 className="siTitle">Air India</h1>
        <span className="siDistance">4.40
        <FontAwesomeIcon icon={faArrowRight} className="UpDown"/>
        7.50
        </span>
        <span className="siTaxiOp">3 h 10 m</span>
        <span className="siSubtitle">
          1 Stop via Hydrabad
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
          <span className="siPrice">₹ 6955</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton"onClick={handleSearch}>Book Now</button>
        </div>
      </div>
     </div> 
    )
}

export default SearchItem3