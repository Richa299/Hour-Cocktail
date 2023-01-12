import { useEffect, useState } from "react"
import { useParams, Link} from "react-router-dom"
import ReactLoading from "react-loading";
const url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function CocktailDetails(){
  
    const {id} =useParams()
    const [loading,setLoading]=useState(false);
    const [cocktail, setCocktail]=useState(null);

    useEffect(()=>{
       setLoading(true);
       async function getCocktail(){
        try{
         const res=await fetch(`${url}${id}`)
         const data=await res.json();
         console.log(data.drinks)
         if(data.drinks){ 
       const {strDrink:name,
              strDrinkThumb:image,
              strAlcoholic:info,
              strCategory:category,
              strGlass:glass,
              strInstructions:instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5}=data.drinks[0];
              const ingredients=[
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5
               ]
               const newCocktail={
                name,image,info,category,glass,instructions,ingredients
               }
               setCocktail(newCocktail)
         }
         else{
            setCocktail(null)
         }
         setLoading(false)
        }
        catch(error){
           console.log(error)
           setLoading(false);
        }
       }
       getCocktail()
    },[id])

    if(loading){
        
        return <ReactLoading color="black" width="100px" height="200px" className="loader"/>
    }
    if(!cocktail){
        return <h2>no cocktail</h2>
    }
    const {name,image,category,info,glass,instructions,ingredients}=cocktail
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} />
            <p>{category}</p>
            <Link to="/">back home</Link>
        </div>
    )
}
export default CocktailDetails