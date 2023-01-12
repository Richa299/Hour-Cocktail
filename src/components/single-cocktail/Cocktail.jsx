import { Link } from "react-router-dom"
import './Cocktail.css'

function Cocktail({image, name, id, info, glass}){
   return(
    <div className="cocktail-list">
      <div className="img-container">
        <img src={image} alt={name} className="images"/>
        <div className="cocktail-footer">
        <span className="name">{name}</span>
        <span className="info">{info}</span>
           <span className="glass">{glass}</span>
        <Link to={`/cocktail/${id}`}><button className="button">Details</button></Link>
      </div>
      </div>
      
    </div>
   )
        }
export default Cocktail