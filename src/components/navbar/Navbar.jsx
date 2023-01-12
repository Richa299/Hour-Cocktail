import logo from '../../../src/logo.jpg';
import './Navbar.css';
function Navbar(){
return(
    <nav className="navbar">
        <div>
            <img src={logo} className="logo" alt="logo"/>
        </div>
    </nav>
)
}
export default Navbar;