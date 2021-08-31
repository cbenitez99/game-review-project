import React from "react"
import {Link} from "react-router-dom"

function Navbar(props){

    return (
        <nav>
            <Link to="/">Home 🏠 </Link>
            <br/>
            <Link to="/games">Game reviews🕹💯</Link>
            <br/>
            <Link to="/games/new">Add a review here 👀</Link>
        </nav>
        
    )
}

export default Navbar;