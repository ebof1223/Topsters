import "./App.css";
import { Route, Switch } from "react-router-dom";
import { allTimeFavorites } from "./Example.js";
import Toppings from "./Toppings";

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Profile</h1>} />
      <Route exact path='/toppings/:mbid' render={() => <h1>Toppings</h1>} />
    </Switch>
  );
  /* <div className='App'>
        {
          <Toppings
            title={allTimeFavorites.title}
            albums={allTimeFavorites.albums}
          />
        }
      </div> */
}

export default App;
