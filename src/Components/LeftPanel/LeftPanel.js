import React, { useState } from "react";
import "./LeftPanel.css";
import { a } from "../../DummyData";
import Card from "../Card/Card";
const LeftPanel = ({selectedOptionFromLeft}) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelection = (e) => {
        setSelectedOption(e.target.innerText)
    } 
  console.log(a);
  return (
    <div>
      {a.map((item) => {
        return (
            
            <Card handleSelection={handleSelection} name={item.name} option={item.option}></Card>
         
        );

      })}
      <h1>{selectedOption}</h1>
    </div>
  );
};

export default LeftPanel;
