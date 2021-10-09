import React, { useState } from "react";
import "./Card.css";

import {ImPlus} from 'react-icons/im'
const Card = ({ name, option, handleSelection }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="card">
    
      <div className="header">
        <h4>Name of card : {name}</h4>
        <ImPlus className="icon" onClick={(e) => setShowOptions(!showOptions)}/>
      </div>

      {showOptions &&
        option.map((item) => {
          return <h5 onClick={handleSelection}>{item}</h5>;
        })}
    </div>
  );
};

export default Card;
