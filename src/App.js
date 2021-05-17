import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import { defaultToppings } from './Example.js';
import { useState } from 'react';
import Toppings from './Toppings';
import ToppingsList from './ToppingsList';
import NewToppingsForm from './NewToppingsForm';

function App() {
  const [toppings, setToppings] = useState({ toppings: defaultToppings });

  const findToppings = (id) => {
    return toppings.toppings.find((topping) => {
      return topping.id === id;
    });
  };

  const saveToppings = (newToppings) => {
    setToppings({ toppings: [...toppings.toppings, newToppings] });
  };

  return (
    <Switch>
      <Route
        exact
        path="/toppings/new"
        render={(routeProps) => (
          <NewToppingsForm
            saveToppings={saveToppings}
            {...routeProps}
            toppings={toppings}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <ToppingsList toppings={toppings.toppings} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/toppings/:id"
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
