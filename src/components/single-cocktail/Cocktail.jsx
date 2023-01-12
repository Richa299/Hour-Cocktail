import { useState } from "react"
import { Link } from "react-router-dom"
import './Cocktail.css'

function Cocktail({image, name, id, info, glass}){
   return(
    <div className="cocktail-list">
      <div className="img-container">
        <img src={image} alt={name} className="images"/>
        <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to="/cocktail/:id">details</Link>
      </div>
      </div>
      
    </div>
   )
        }
export default Cocktail