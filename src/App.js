import "./App.css";
import { Route, Switch } from "react-router-dom";
import { defaultToppings } from "./Example.js";
import Toppings from "./Toppings";

function App() {
  const findToppings = (id) => {
    //toppings is index of defaultToppings
    return defaultToppings.find((topping) => {
      return topping.id === id;
    });
  };

  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Profile</h1>} />
      <Route
        exact
        path='/toppings/:id'
        render={(routeProps) => (
          <Toppings
            title={findToppings(routeProps.match.params.id).title}
            albums={findToppings(routeProps.match.params.id).albums}
          />
        )}
      />
    </Switch>
  );
}

export default App;
