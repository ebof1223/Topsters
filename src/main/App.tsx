import { Route, Switch } from 'react-router-dom';
import recommended from './recommended-sample';
import { useState, useLayoutEffect } from 'react';
import { TopsterTemplate } from '../interface.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Topster from '../topster/Topster';
import Main from './Main';
import NewTopster from '../create/NewTopster';
import './main-styles/Page.css';
import Page from './Page';
import Landing from '../landing/Landing';

const App: React.FC = () => {
  const savedTopsters = JSON.parse(
    window.localStorage.getItem('topsters') || '{}'
  );
  const howToWindow =
    JSON.parse(window.localStorage.getItem('HowToUse')) || true;

  useLayoutEffect(() => {
    window.localStorage.setItem('topsters', JSON.stringify(topsters));
    window.localStorage.setItem('HowToUse', JSON.stringify(openHowTo));
  });

  const [openHowTo, setOpenHowTo] = useState(howToWindow);
  const [topsters, setTopsters] = useState(
    Object.keys(savedTopsters).length ? savedTopsters : []
  );

  const findUserTopsters = (id: string) => {
    return topsters.find((topster: TopsterTemplate) => {
      return topster.id === id;
    });
  };
  const findRecommendedTopsters = (id: string) => {
    return recommended.find((topster: any) => {
      return topster.id === id;
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
                    <Main
                      recommended={recommended}
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
                path="/recommended/:id"
                render={(routeProps) => (
                  <Page>
                    <Topster
                      title={
                        findRecommendedTopsters(routeProps.match.params.id)
                          .title
                      }
                      id={
                        findRecommendedTopsters(routeProps.match.params.id).id
                      }
                      albums={
                        findRecommendedTopsters(routeProps.match.params.id)
                          .albums
                      }
                      recommended={recommended}
                      {...routeProps}
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
                      title={findUserTopsters(routeProps.match.params.id).title}
                      id={findUserTopsters(routeProps.match.params.id).id}
                      albums={
                        findUserTopsters(routeProps.match.params.id).albums
                      }
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
                    <Main
                      recommended={recommended}
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
