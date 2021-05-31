import { Route, Switch } from 'react-router-dom';
import { defaultToppings } from './Example.js';
import { useState, useLayoutEffect } from 'react';
import Toppings from './Toppings';
import ToppingsList from './ToppingsList';
import NewToppingsForm from './NewToppingsForm';
import './styles/Page.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from './Page';
import { ToppingsStructure } from './interface.js';

const App: React.FC = () => {
  const savedToppings = JSON.parse(
    window.localStorage.getItem('toppings') || '{}'
  );
  const [toppings, setToppings] = useState(
    Object.keys(savedToppings).length ? savedToppings : defaultToppings
  );

  useLayoutEffect(() => {
    console.log('saving to local storage');
    window.localStorage.setItem('toppings', JSON.stringify(toppings));
  });

  const findToppings = (id: string) => {
    return toppings.find((topping: ToppingsStructure) => {
      return topping.id === id;
    });
  };

  const saveToppings = (newToppings: ToppingsStructure) => {
    console.log(newToppings);
    setToppings([...toppings, newToppings]);
  };

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition classNames="page" timeout={500} key={location.key}>
            <Switch location={location}>
              <Route
                exact
                path="/toppings/new"
                render={(routeProps) => (
                  <Page>
                    <NewToppingsForm
                      saveToppings={saveToppings}
                      {...routeProps}
                      toppings={toppings}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <Page>
                    <ToppingsList
                      toppings={toppings}
                      {...routeProps}
                      setToppings={setToppings}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/toppings/:id"
                render={(routeProps) => (
                  <Page>
                    <Toppings
                      title={findToppings(routeProps.match.params.id).title}
                      albums={findToppings(routeProps.match.params.id).albums}
                      toppings={toppings}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                render={(routeProps) => (
                  <Page>
                    <ToppingsList
                      toppings={toppings}
                      {...routeProps}
                      setToppings={setToppings}
                    />
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default App;
