import React from "react";
import GameCard from './GameCard';

function GameReviewsList({reviews}){

    const mappedReviews = reviews.map((review) => {
        return <GameCard key={review.id} review={review}/>
    })

    return (
        <div>
            <h1>Reviewed Games:</h1>
            {mappedReviews}
        </div>
    )
}

export default GameReviewsList;