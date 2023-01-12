import { useEffect, useRef } from "react"
import { useGlobalContext } from "../../context"
import './Search.css'
function SearchForm(){
    const {setSearchTerm}=useGlobalContext()
    const searchValue=useRef('');
    
    useEffect(()=>{
    searchValue.current.focus();
    },[])

    const searchCocktail=()=>{
        setSearchTerm(searchValue.current.value);
    }
    const handleSubmit=(e)=>{
     e.preventDefault()
    }
return(
   <div className="form">
       <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Search Your Favorite Cocktail</label>
        <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
       </form>
   </div>

)
}
export default SearchForm