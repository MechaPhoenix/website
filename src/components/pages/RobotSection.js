import React from 'react';
import Robot1 from "../../assets/robots/Robot/Robot2023.png"
import Robot2 from "../../assets/robots/Robot/Robot2019.png"

import "../css/Home.css"


const RobotSection = () => {
  return (
    <div id="robot-section">
     
      <img className="robot-image2" src={Robot1} alt="Robot Image 1" />
      <img className="robot-image" src={Robot2} alt="Robot Image 2" />
    </div>
  );
};

export default RobotSection;
