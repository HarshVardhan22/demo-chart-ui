import React from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import MiddlePanel from "../MiddlePanel/MiddlePanel";
import RightPanel from "../RightPanel/RightPanel";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container homePage">
      <div className="row">
        <div className="col-4">
          {" "}
          <LeftPanel />
        </div>
        <div className="col-4">
          {" "}
          <MiddlePanel />
        </div>
        <div className="col-4">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
