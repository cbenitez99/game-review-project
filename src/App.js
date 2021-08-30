import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <GameReviewList/>
          </Route>

          <Route exact path="/games/new">
            <GameReviewForm/>
          </Route>

          <Route exact path="/games/reviews">
            <Home/>
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

