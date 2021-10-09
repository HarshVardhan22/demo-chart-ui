import React, { useEffect, useState } from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import MiddlePanel from "../MiddlePanel/MiddlePanel";
import RightPanel from "../RightPanel/RightPanel";
import "./HomePage.css";

const HomePage = () => {
    const[inputFromMiddle,setInputFromMiddle] = useState("")
    const[inputFromLeft,setInputFromLeft] = useState("")
    const [outputToRight,setOutputToRight] = useState("")
    const handleLeftInput = (e) => {
        setInputFromLeft(e)
    }

    const handleMiddleInput = (e) => {
        setInputFromMiddle(e)
    }

    //handleCompute function takes the value from :
    //inputFromMiddle and inputFromLeft and then performs some operation
    //and then returns an output to be shown in the rightMost element
    const handleCompute = () => {
      
        setOutputToRight(inputFromLeft+" "+inputFromMiddle)
    }

    useEffect(() => {
        if(inputFromLeft!==""&&inputFromMiddle!=="")
        handleCompute();
     // eslint-disable-next-line 
    }, [inputFromMiddle,inputFromLeft])

  return (
    <div className="container homePage">
      <div className="row">
        <div className="col-4 pane">
          {" "}
          <LeftPanel handleLeftInput={handleLeftInput}/>
          {inputFromLeft}
        </div>
        <div className="col-4 pane">
          {" "}
          <MiddlePanel handleMiddleInput={handleMiddleInput}/>
          {inputFromMiddle}
        </div>
        <div className="col-4 pane">
          <RightPanel value={outputToRight}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
