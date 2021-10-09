import React,{useState} from 'react'
import "./Card.css"
const Card = ({name,option,handleSelection}) => {
  const [showOptions,setShowOptions] = useState(false)
    return (
        <div>
        <h1>
            Name of card : {name}
        </h1>
        <button onClick={(e)=>setShowOptions(!showOptions)}>+</button>
           {showOptions && option.map((item)=>{
               return <h5 onClick={handleSelection}>{item}</h5>
           })} 
        </div>
    )
}

export default Card
