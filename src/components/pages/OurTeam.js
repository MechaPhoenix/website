import "../css/OurTeam.css"

import Prov2023Pic from "../../assets/TeamPics/2023/7722Team2023Prov.jpg"

import React from "react"

const Team = () => {
    return (
        <div className="container">
            <h3>Our Team</h3>

            <h4>Us at the 2023 Provincials In Hamiltion Ontario!</h4>
                 <img className="ProvPic" src={Prov2023Pic}/>


                 <h4>About us</h4>
                 <h3>We are a high school team from the K-W Area in Ontario Canada, We Accept All Grades 9 - 12 Even Grade 13!</h3>
        </div>
    )
}

export default Team