import React from "react"
import {Link} from "react-router-dom"

function Navbar(props){

    return (
        <nav>
            <Link to="/">Game reviews🕹💯</Link>
            <br/>
            <Link to="/games/new">Add a review here 👀</Link>
        </nav>
        
    )
}

export default Navbar;