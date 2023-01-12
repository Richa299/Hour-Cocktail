import { useRef } from "react"
import { useGlobalContext } from "../../context"
import './Search.css'
function SearchForm(){
    const {setSearchTerm}=useGlobalContext()
    const searchValue=useRef('');
    
    const searchCocktail=()=>{
        setSearchTerm(searchValue.current.value);
    }
return(
   <div className="form">
       <form className="search-form">
        <label htmlFor="name">Search your cocktail</label>
        <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
       </form>
   </div>

)
}
export default SearchForm