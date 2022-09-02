import React from "react";
import "./list.css"
// import Flight from "../../components/flightsbooking/Flight";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";


import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import SearchItem1 from "../../components/searchItem/SearchItem1";
import SearchItem2 from "../../components/searchItem/SearchItem2";
import SearchItem3 from "../../components/searchItem/SearchItem3";
import SearchItem4 from "../../components/searchItem/SearchItem4";
import SearchItem5 from "../../components/searchItem/SearchItem5";
import SearchItem6 from "../../components/searchItem/SearchItem6";
import SearchItem7 from "../../components/searchItem/SearchItem7";


const List = () => {
    const location = useLocation();
    console.log(location)
    const [destination, setDestination] = useState(location.state.destination);
    const[toDestination, settoDestination]= useState(location.state.toDestination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);

    


    return(
        <div>
            <Navbar/>
            <Header type="list"/>
    
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label >From</label>
                        <input placeholder={destination} type="text" />

                    </div>
                    <div className="lsItem">
                        <label >To</label>
                        <input placeholder={toDestination} type="text" />
                    </div>
                    <div className="lsItem">
                        <label >Date </label>
                        <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")}  `}</span>
                        { openDate && ( 
                        <DateRange
                        onChange={(item)=> setDate([item.selection])} 
                        minDate={new Date()}
                        ranges={date}
                        
                        />
                        )}
                        
                    </div>
                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">
                        <div className="lsOptionItem">
                         <span className="lsOptionText">
                            Adult
                        </span>  
                        <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                        </div>
                        <div className="lsOptionItem">
                         <span className="lsOptionText">
                            Children
                        </span>  
                        <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                        </div>
                        <div className="lsOptionItem">
                         <span className="lsOptionText">
                            Class
                        </span>
                        <select className="classes" >
                        <option className="ClassOption" selected disabled hidden>Select</option>
                        <option className="ClassOption">First Class</option>
                        <option className="ClassOption">Business Class</option>
                        <option className="ClassOption">Economy Class</option>
                        </select>  
                       
                        </div>
                    </div>
                    </div>
                    <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem1/>
                        <SearchItem2/>
                        <SearchItem3/>
                        <SearchItem4/>
                        <SearchItem5/>
                        <SearchItem6/>
                        <SearchItem7/>
                        
                         </div>

                </div>
            </div>

        </div>
    )
}
export default List