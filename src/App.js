import { Route, Switch } from 'react-router-dom';
import { defaultToppings } from './Example.js';
import { useState, useLayoutEffect } from 'react';
import Toppings from './Toppings';
import ToppingsList from './ToppingsList';
import NewToppingsForm from './NewToppingsForm';
import './styles/App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const savedToppings = JSON.parse(window.localStorage.getItem('toppings'));
  const [toppings, setToppings] = useState({
    toppings: savedToppings ? savedToppings.toppings : defaultToppings,
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
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={500} key={location.key}>
            <Switch location={location}>
              <Route
                exact
                path="/toppings/new"
                render={(routeProps) => (
                  <div className="page">
                    <NewToppingsForm
                      saveToppings={saveToppings}
                      {...routeProps}
                      toppings={toppings}
                    />
                  </div>
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
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
