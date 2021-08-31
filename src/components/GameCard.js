import React from "react"

function GameCard({review}){

    return (
        <div className="game-card">
            <img alt={review.title} src={review.image}/>
            <h3>{review.title}</h3>
            <h5>{review.rating} ⭐️'s</h5>
            <h3 style={{color: "red"}}>{review.price}</h3>
            <em><h4>{review.platform}</h4></em>
            <h5>"{review.review}"</h5>
            <p> -{review.user}</p>
        </div>
    )
}

export default GameCard