import React, { useState } from "react";
import "./LeftPanel.css";
import { a } from "../../DummyData";
import Card from "../Card/Card";
const LeftPanel = ({ handleLeftInput }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (e) => {
    handleLeftInput(e.target.innerText);
  };

  return (
    <div>
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
