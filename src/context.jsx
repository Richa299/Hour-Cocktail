const { createContext, useContext, useState } = require("react")

const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext=createContext()

const AppProvider=({children})=>{

    const [loading,setLoading]=useState(true)           //for loading time-period
    const [searchTerm,setSearchTerm]=useState('a')      //for search-form
    const [cocktails,setCocktail]=useState([])          // for list of cocktails
    return(
        <AppContext.Provider value={
            {loading,
            cocktails,
            setSearchTerm}}>
            {children}
            
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export { AppContext, AppProvider}
