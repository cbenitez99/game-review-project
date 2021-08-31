import React from "react"
import { NavLink} from "react-router-dom"

function Navbar(){

    return (
        <nav id="navbar">
    
            <NavLink to="/">Home 🏠</NavLink> | <NavLink to="/games">Game reviews🕹💯</NavLink> | <NavLink to="/games/new">Add a review here 👀</NavLink>
            
        </nav>
        
    )
}

export default Navbar;