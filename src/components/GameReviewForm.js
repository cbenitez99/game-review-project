import React, { useState } from "react";

function GameReviewForm ({handlePost}){   

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    rating: "",
    price: "",
    platform: "",
    review: "",
    user: "",
    likes: 0
  })

    function handleSubmit(){
      const URL = 'http://localhost:3000/games'
      const options = {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      }
      fetch(URL, options)
      .then(res => res.json())
      .then(data => handlePost(...data,[formData]))
    }

    function handleChange(event) {
      setFormData({...formData, [event.target.id] : event.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="image" type="text" placeholder="Paste Image URL Here" onChange={handleChange} value={formData.image}/>
            <br/>
            <input id="title" type="text" placeholder="Enter Game Title Here" onChange={handleChange} value={formData.title}/>
            <br/>
            <input  id="rating" max="5" min="1" step="0.5" type="number" placeholder="Rate from 1-5" onChange={handleChange} value={formData.rating}/>
            <br/>
            <input id="price" type="number" step="0.1" min="0" placeholder="Enter Game Price Here" onChange={handleChange} value={formData.price}/>
            <br/>
            <input id="platform" type="text" placeholder="Enter Platform Here" onChange={handleChange} value={formData.platform}/>
            <br/>
            <textarea id="review" type="text" placeholder="Write Review..." onChange={handleChange} value={formData.review}/>
            <br/>
            <input id="user" type="text" placeholder="Enter Your Name" onChange={handleChange} value={formData.user}/>
            <br/>
            <button id="button" type="submit" onClick={()=> alert("Your review has been added!")}>Add Review</button>
        </form>
    )
}

export default GameReviewForm;