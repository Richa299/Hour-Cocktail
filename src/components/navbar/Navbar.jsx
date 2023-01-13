import logo from '../../../src/logo.jpg';
import './Navbar.css';
function Navbar(){
return(
    <nav className="navbar">
       
            <img src={logo} className="logo" alt="logo"/>
        
    </nav>
)
}
export default Navbar;