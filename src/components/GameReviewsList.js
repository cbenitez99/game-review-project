import React from "react";
import GameCard from './GameCard';

function GameReviewsList({reviews, handleDelete}){

    const mappedReviews = reviews.map((review) => {
        return <GameCard key={review.id} review={review} handleDelete={handleDelete}/>
    })

    return (
        <div id="list">
            <h1>Reviewed Games:</h1>
            {mappedReviews}
        </div>
    )
}

export default GameReviewsList;