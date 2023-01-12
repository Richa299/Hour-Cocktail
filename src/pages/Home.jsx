
import CocktailList from "../components/cocktail-lists/CocktailList"
import SearchForm from "../components/search-form/SearchForm"

function Home(){
return(
    <div>
        <SearchForm/>
        <CocktailList/>
    </div>
)
}
export default Home