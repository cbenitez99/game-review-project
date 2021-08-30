import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"
import GameReviewsList from './components/GameReviewsList';
import GameReviewForm from './components/GameReviewForm';
import GameReview from './components/GameReview';
import Navbar from './components/Navbar';

function App() {

  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }, [])



  return (
    <div className="App">
      <h2>WELCOME TO THE ULTIMATE GAME REVIEWER</h2>
      <Router>

        <Navbar/>

        <Switch>

          <Route exact path="/">
            <GameReviewsList reviews={reviews}/>
          </Route>

          <Route exact path="/games/new">
            <GameReviewForm/>
          </Route>

          <Route exact path="/games/:id">
            <GameReview/>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;

