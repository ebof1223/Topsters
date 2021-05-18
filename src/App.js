import { Route, Switch } from 'react-router-dom';
import { defaultToppings } from './Example.js';
import { useState, useLayoutEffect } from 'react';
import Toppings from './Toppings';
import ToppingsList from './ToppingsList';
import NewToppingsForm from './NewToppingsForm';

function App() {
  const savedToppings = JSON.parse(window.localStorage.toppings);
  const [toppings, setToppings] = useState({
    toppings: savedToppings.toppings || defaultToppings,
  });

  useLayoutEffect(() => {
    console.log('saving to local storage');
    window.localStorage.setItem('toppings', JSON.stringify(toppings));
  });

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
          <ToppingsList
            toppings={toppings}
            {...routeProps}
            setToppings={setToppings}
          />
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
