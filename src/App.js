import './App.css';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailDetails from './pages/CocktailDetails';

function App() {
 
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/cocktail/:id" element={<CocktailDetails />}>
        </Route>
        </Routes>
  
        </BrowserRouter>
       
    </div>
  )
}

export default App;
