import "./styles/App.css";
import { Route, Switch } from "react-router-dom";
import { defaultToppings } from "./Example.js";
import Toppings from "./Toppings";
import ToppingsList from "./ToppingsList";

function App() {
  const findToppings = (id) => {
    return defaultToppings.find((topping) => {
      return topping.id === id;
    });
  };

  return (
    <Switch>
      <Route
        exact
        path='/'
        render={(routeProps) => (
          <ToppingsList toppings={defaultToppings} {...routeProps} />
        )}
      />
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
