import logo from '../../../src/logo.jpg';
import './Navbar.css';
import { Link } from "react-router-dom"
function Navbar(){
return(
    <nav className="navbar">
        <div>
            <img src={logo} className="logo"/>
            <ul>
            <Link to="/">details</Link>
            </ul>
        </div>
    </nav>
)
}
export default Navbar;