import React from "react";
import "./propertyList.css"

const PropertyList=()=>{
    return(
        <div className="pList">
            <div className="pListItem">
                <img src="https://i.insider.com/5ab0208dc72ac132008b4ad9?width=1000&format=jpeg&auto=webp" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>

                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.hilton.com/im/en/LUXHITW/748467/luxhitw-spa-pool-hotel-1.jpg?impolicy=crop&cw=5780&ch=4242&gravity=NorthWest&xposition=290&yposition=0&rw=582&rh=427" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>2331 hotels</h2>

                </div>
            </div>
            <div className="pListItem">
                <img src="https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?k=20&m=472899538&s=612x612&w=0&h=ZuEBl5Pq1_cn9pUsG_jAGQmiT0UgL1jyl7TZY6w-K0g=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>2335 hotels</h2>

                </div>
            </div>
            <div className="pListItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2u6YYRiliVBYBwHbJKTtL9sydP3bimZkVW7S-RqKXm7Z2PhsFJh-8l0DPZi-4RdbQq8&usqp=CAU" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>2339 hotels</h2>

                </div>
            </div>
            <div className="pListItem">
                <img src="https://thumbs.dreamstime.com/b/hotel-room-27254386.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>2339 hotels</h2>

                </div>
            </div>
        </div>

    )
}

export default PropertyList