import React from "react";
import"./booking.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";


const Booking=()=>{
    return(
    <div>
         <Navbar/>
            <Header type="list"/>


            <div className="detailsContainer">
                <div className="detailsWrapper">
                    <div className="detailsSearch">
                    <h1 className="detailsTitle">Please Enter Your Details</h1>
                    <div className="enterDetails">
                        <label >Name</label>
                        <input placeholder="Full Name" type="text" contentEditable required  />
                        <br />

                    </div>
                    <div className="enterDetails">
                        <label >Contact</label>
                       
                        <input placeholder="Mobile Number" type="text" contentEditable required  />

                        <br />
                        
                       
                    </div>
                    <div className="enterDetails">
                        <label >Age </label>
                        <input placeholder="Age" type="text" contentEditable required  />
                        

                        <br />
                    
                    </div>
                    <div className="enterDetails">
                        <label >Email </label>
                        <input placeholder="Mail" type="text" contentEditable required  />
                        

                        <br />
                    
                    </div>
                    <button className="submit">Submit</button>
                    
              

                </div>
            
            </div>
        </div>
    </div>




                
                   




    )
}
export default Booking