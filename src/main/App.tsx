import { Route, Switch } from 'react-router-dom';
import { userMade } from './Usermade-default';
import { useState, useLayoutEffect } from 'react';
import { TopsterTemplate } from '../interface.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Topster from '../topster/Topster';
import TopsterList from './TopsterList';
import NewTopster from '../create/NewTopster';
import './main-styles/Page.css';
import Page from './Page';
import Landing from '../landing/Landing';

const App: React.FC = () => {
  const savedTopsters = JSON.parse(
    window.localStorage.getItem('topsters') || '{}'
  );

  useLayoutEffect(() => {
    window.localStorage.setItem('topsters', JSON.stringify(topsters));
    window.localStorage.setItem('How to use prompt', JSON.stringify(openHowTo));
  });

  const [openHowTo, setOpenHowTo] = useState(
    JSON.parse(window.localStorage.getItem('How to use prompt'))
  );
  const [topsters, setTopsters] = useState(
    Object.keys(savedTopsters).length ? savedTopsters : userMade
  );
  console.log(window.localStorage);

  const findTopsters = (id: string) => {
    return topsters.find((topping: TopsterTemplate) => {
      return topping.id === id;
    });
  };
  const saveTopsters = (newTopster: TopsterTemplate) => {
    setTopsters([...topsters, newTopster]);
  };
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition classNames="page" timeout={500} key={location.key}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <Page>
                    <Landing {...routeProps} />
                  </Page>
                )}
              />
              <Route
                exact
                path="/home"
                render={(routeProps) => (
                  <Page>
                    <TopsterList
                      topsters={topsters}
                      {...routeProps}
                      setTopsters={setTopsters}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/topsters/new"
                render={(routeProps) => (
                  <Page>
                    <NewTopster
                      saveTopsters={saveTopsters}
                      {...routeProps}
                      topsters={topsters}
                      openHowTo={openHowTo}
                      setOpenHowTo={setOpenHowTo}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/topsters/:id"
                render={(routeProps) => (
                  <Page>
                    <Topster
                      title={findTopsters(routeProps.match.params.id).title}
                      id={findTopsters(routeProps.match.params.id).id}
                      albums={findTopsters(routeProps.match.params.id).albums}
                      topsters={topsters}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/topsters/edit/:id"
                render={(routeProps) => (
                  <Page>
                    <NewTopster
                      saveTopsters={saveTopsters}
                      {...routeProps}
                      topsters={topsters}
                      openHowTo={openHowTo}
                      setOpenHowTo={setOpenHowTo}
                    />
                  </Page>
                )}
              />
              <Route
                render={(routeProps) => (
                  <Page>
                    <TopsterList
                      topsters={topsters}
                      {...routeProps}
                      setTopsters={setTopsters}
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
