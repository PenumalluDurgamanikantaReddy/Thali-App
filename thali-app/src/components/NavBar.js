

import "./Navbar.css"
import { NavLink } from "react-router-dom"
const Navbar=()=>{







    return(
        <main>
        <nav className="navigation">
            <ul>
            <NavLink to="Home"> <li> <a>Home</a></li></NavLink> 
         <NavLink to="Menu"><li><a>Menu</a></li></NavLink> 
         <NavLink to="Cart">  <li><a>Cart</a></li></NavLink> 
            <li><a>Contact</a></li>
            </ul></nav>
            </main>

    )
}
export default Navbar