import React from 'react'
import "./MiddlePanel.css"
import { b } from '../../DummyData';
import Card from '../Card/Card';
const MiddlePanel = ({handleMiddleInput}) => {
   

    const handleSelection = (e) => {
        handleMiddleInput(e.target.innerText);
    };
  
    return (
      <div className="cardContainer">
      <h1>Object Type</h1>
      <hr></hr>
        {b.map((item) => {
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
}

export default MiddlePanel
