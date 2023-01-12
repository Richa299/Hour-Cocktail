import { useGlobalContext } from "../../context"
import ReactLoading from "react-loading";
import Cocktail from "../single-cocktail/Cocktail";
import './CocktailList.css'
function CocktailList(){

    const {cocktails, loading}=useGlobalContext()
    if(loading){
       return <ReactLoading color="black" width="100px" height="200px" className="loader"/>
    }

if(cocktails.length<1){
    return(
        <h2>no cocktails</h2>
    )
}
    
        return (
            
            <div className="cocktails-container">
                {/* <h2 className="main">Cocktails</h2> */}
                <div className="cocktail-list">
                    {cocktails.map((item)=>{
                        return <Cocktail key={item.id} {...item}/>
                    })}
                </div>
            </div>
        )
    
    }
    export default CocktailList
