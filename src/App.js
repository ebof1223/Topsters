import { Route, Switch } from 'react-router-dom';
import { defaultToppings } from './Example.js';
import { useState, useLayoutEffect } from 'react';
import Toppings from './Toppings';
import ToppingsList from './ToppingsList';
import NewToppingsForm from './NewToppingsForm';
import './styles/Page.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from './Page';

export default function App() {
  const savedToppings = JSON.parse(window.localStorage.getItem('toppings'));

  const [authCode, setAuthCode] = useState(null);
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
                      setAuthCode={setAuthCode}
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
                      authCode={authCode}
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
                      setAuthCode={setAuthCode}
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
}
