import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"
import GameReviewsList from './components/GameReviewsList';
import GameReviewForm from './components/GameReviewForm';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  const [reviews, setReviews] = useState([])
 
  function handleDelete(id) {
    const removedReviews = reviews.filter(review => {
      return (review.id !== id)
    })

    setReviews(removedReviews)

    const options = {
      method: "DELETE",
      headers: {'Content-Type':'application/json'}
    }
    fetch(`http://localhost:3000/games/${id}`, options)
  }

  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then(res => res.json())
    .then(data => {
      setReviews(data)
    })
  }, [])

  function handlePost(newReview){
    setReviews(newReview)
  }

  return (
    <div className="App">
      
      <Router>

        <Navbar/>

        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/games">
            <GameReviewsList reviews={reviews} handleDelete={handleDelete}/> 
          </Route>

          <Route exact path="/games/new">
            <GameReviewForm handlePost={handlePost}/>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;

