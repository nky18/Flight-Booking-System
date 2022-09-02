import React from "react";
import"./featured.css"

const Featured=()=>{
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src="https://japaninsides.com/wp-content/uploads/2021/01/fc96b322e811780acfdffa457e28975b-680x440.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Aardvark</h1>
                    <h2>General Dynamics F-111</h2>
                </div>

            </div>
            <div className="featuredItem">
                <img src="https://www.investopedia.com/thmb/zDiMCCImw7gFZzldYwSYaOCJ7oU=/680x440/filters:fill(auto,1)/shutterstock_287796644-5bfc47b046e0fb0051c41f37.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Big Bird</h1>
                    <h2>McDonnell Douglas F-15</h2>
                </div>

            </div>
            <div className="featuredItem">
                <img src="https://www.investopedia.com/thmb/eYOaLU9OaMrLjXqTKYTg6-v8M70=/680x440/filters:fill(auto,1)/thinkstockphotos481078799_1-5bfc2fa146e0fb00260be4af.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Blackbird</h1>
                    <h2>Lockheed SR-71</h2>
                </div>

            </div>
        </div>
    )
}

export default Featured