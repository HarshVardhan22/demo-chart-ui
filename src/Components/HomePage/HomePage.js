import React, { useState } from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import MiddlePanel from "../MiddlePanel/MiddlePanel";
import RightPanel from "../RightPanel/RightPanel";
import "./HomePage.css";

const HomePage = () => {
    const[inputFromMiddle,setInputFromMiddle] = useState("")
    const[inputFromLeft,setInputFromLeft] = useState("")

    const handleLeftInput = (e) => {
        setInputFromLeft(e)
    }

    const handleMiddleInput = (e) => {
        setInputFromMiddle(e)
    }

  return (
    <div className="container homePage">
      <div className="row">
        <div className="col-4">
          {" "}
          <LeftPanel handleLeftInput={handleLeftInput}/>
          {inputFromLeft}
        </div>
        <div className="col-4">
          {" "}
          <MiddlePanel handleMiddleInput={handleMiddleInput}/>
          {inputFromMiddle}
        </div>
        <div className="col-4">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
