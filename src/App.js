import "./styles/App.css";
import { Route, Switch } from "react-router-dom";
import { defaultToppings } from "./Example.js";
import Toppings from "./Toppings";
import ToppingsList from "./ToppingsList";
import NewToppingsForm from "./NewToppingsForm";

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
        path='/toppings/new'
        render={(routeProps) => <NewToppingsForm {...routeProps} />}
      />
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
