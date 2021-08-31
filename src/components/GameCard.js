import React from "react"

function GameCard({review}){
    return (
        <div className="card-container">
            <div className="image-container">
                <img alt={review.title} src={review.image}/>
            </div>
            <h2 className="title">{review.title}</h2>
            <h5>{review.rating} ⭐️'s</h5>
            <h3 style={{color: "red"}}>{review.price}</h3>
            <em><h4 className="platform">{review.platform}</h4></em>
            <h5>"{review.review}"</h5>
            <p>-anonymous player</p>

        </div>
    )
}

export default GameCard