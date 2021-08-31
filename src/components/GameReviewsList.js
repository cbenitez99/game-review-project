import React from "react";
import GameCard from './GameCard';

function GameReviewsList({reviews}){

    const mappedReviews = reviews.map((review) => {
        return <GameCard key={review.id} review={review}/>
    })

    return (
        <div>
            {mappedReviews}
        </div>
    )
}

export default GameReviewsList;