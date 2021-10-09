import React from "react";
import "./LeftPanel.css";
import { a } from "../../DummyData";
import Card from "../Card/Card";
const LeftPanel = ({ handleLeftInput }) => {
  

  const handleSelection = (e) => {
    handleLeftInput(e.target.innerText);
  };

  return (
    <div className="cardContainer">
    <h1>Schema</h1>
    <hr></hr>
      {a.map((item) => {
        return (
          <Card
            handleSelection={handleSelection}
            name={item.name}
            option={item.option}
          ></Card>
        );
      })}
    </div>
  );
};

export default LeftPanel;
