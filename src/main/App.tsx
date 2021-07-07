import { Route, Switch } from 'react-router-dom';
import recommended from './recommended-sample';
import { useState, useLayoutEffect, useEffect } from 'react';
import { TopsterTemplate } from '../interface.js';
import Bookmarks from './Bookmarks';
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
  const savedBookmarked = JSON.parse(
    window.localStorage.getItem('bookmarks') || '{}'
  );
  const [openLandingModal, setOpenLandingModal] = useState(true);
  const [showAgain, setShowAgain] = useState(true);
  const [topsters, setTopsters] = useState(
    Object.keys(savedTopsters).length ? savedTopsters : []
  );
  const [bookmarks, setBookmarks] = useState(
    Object.keys(savedBookmarked).length ? savedBookmarked : []
  );
  console.log(bookmarks);

  useEffect(() => {
    let localStorageBookmarks = JSON.parse(
      window.localStorage.getItem('bookmarks')
    );
    if (localStorageBookmarks.length) {
      for (let lsItem of localStorageBookmarks) {
        recommended.map((recItem) => {
          if (lsItem.id === recItem.id) {
            recItem.bookmarked = lsItem.bookmarked;
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    window.localStorage.setItem('topsters', JSON.stringify(topsters));
    window.localStorage.setItem('HowToUse', JSON.stringify(showAgain));
    console.log(
      'ls bookmarks updated',
      JSON.parse(window.localStorage.getItem('bookmarks'))
    );
  });

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
                    <Landing
                      {...routeProps}
                      openLandingModal={openLandingModal}
                      setOpenLandingModal={setOpenLandingModal}
                    />
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
                      setOpenLandingModal={setOpenLandingModal}
                      bookmarks={bookmarks}
                      setBookmarks={setBookmarks}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/bookmarks"
                render={(routeProps) => (
                  <Page>
                    <Bookmarks
                      {...routeProps}
                      bookmarks={bookmarks}
                      setBookmarks={setBookmarks}
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
                      setShowAgain={setShowAgain}
                      showAgain={showAgain}
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
                      topsters={topsters}
                      recommended={recommended}
                      {...routeProps}
                      bookmarks={bookmarks}
                      setBookmarks={setBookmarks}
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
                      setShowAgain={setShowAgain}
                      showAgain={showAgain}
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
                      setOpenLandingModal={setOpenLandingModal}
                      bookmarks={bookmarks}
                      setBookmarks={setBookmarks}
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
