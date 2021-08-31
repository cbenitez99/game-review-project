import React from "react";
import GameCard from './GameCard';


function GameReviewsList({reviews}){

    const reviewz = reviews.map((review) => {
        return <GameCard key={review.id} review={review}/>
    })


    return (
        <div className="list-card">
            {reviewz}
        </div>
    )
}

export default GameReviewsList;