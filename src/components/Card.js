import React from "react"
import "./card.css"
const Card = props => {
  return (
    <div className="card">
      <img src={props.background} alt="" srcset="" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}

export default Card
