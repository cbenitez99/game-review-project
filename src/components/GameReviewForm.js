import React, { useState } from "react";

function GameReviewForm ({formData, reviews}){
   
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function handleFirstName(event) {
        setFirstName(event.target.value);
      }
      
      function handleLastName(event) {
        setLastName(event.target.value);
      }

    return (
        <form>
            <input type="text" onChange={handleFirstName} value={firstName}/>
            <input type="text" onChange={handleLastName} value={lastName}/>
            <br/>
            <textarea type="text"/>
            <br/>
            <button type="submit">Add Review</button>
        </form>
    )
}

export default GameReviewForm;