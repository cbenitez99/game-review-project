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

  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then(res => res.json())
    .then(data => {
      setReviews(data)
    })
  }, [])

  return (
    <div className="App">
      <h2>WELCOME TO THE ULTIMATE GAME REVIEWER</h2>
      <Router>

        <Navbar/>

        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/games"> 
            <GameReviewsList reviews={reviews}/>
          </Route>

          <Route exact path="/games/new">
            <GameReviewForm reviews={reviews}/>
          </Route>

        </Switch>
        
      </Router>

    </div>
  );
}

export default App;

