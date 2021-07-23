import SubMainHeading from './SubMainHeading';
import { TopsterTemplate } from '../interface';
import { useEffect, useRef, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import UpNext from './UpNext';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './main-styles/Main-styles';
import UserTopsters from './UserTopsters';
import DeleteModal from './DeleteModal';
import Recommended from './Recommended';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DotNavigation from './DotNavigation';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
// import ArrowDropDownIcon from '@material-ui/bookmarksicons/ArrowDropDown';

interface Props {
  classes: {
    root: string;
    heading: string;
    OuterContainer: string;
    nav: string;
    RecommendedTopsters: string;
    UserTopsters: string;
    RecommendedTitle: string;
    RecommendedTitleContainer: string;
    BackButton: string;
    subMain: string;
    AOTDTitleContainer: string;
    RecommendedSection: string;
    RecommendedContainer: string;
    topstersSection: string;
    recommendedArrowVisible: string;
    recommendedArrowHidden: string;
  };
  topsters: TopsterTemplate[];
  history: {
    push: (input: string) => void;
  };
  setTopsters: (input: TopsterTemplate[]) => void;
  recommended?: any;
  setOpenLandingModal: (i: boolean) => void;
  bookmarks: TopsterTemplate[];
}
const Main: React.FC<Props> = ({
  topsters,
  history,
  setTopsters,
  classes,
  recommended,
  setOpenLandingModal,
  bookmarks,
}) => {
  console.log(recommended);
  const RecommendedSectionalRef = useRef(null);
  const TopsterContainerRef = useRef(null);

  const elementRef: React.MutableRefObject<HTMLDivElement> = useRef();
  useEffect(() => {
    elementRef.current && elementRef.current.scrollIntoView();
  }, []);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);
  const [currentRecSection, setCurrentRecSection] = useState(null);
  const [currentTopSection, setCurrentTopSection] = useState(null);
  const [currentRecIndex, setCurrentRecIndex] = useState(0);
  const [currentTopIndex, setCurrentTopIndex] = useState(null);

  useEffect(() => {
    setCurrentRecSection(
      RecommendedSectionalRef.current.parentElement.childNodes[currentRecIndex]
    );
    // matters if we want navigation arrows
    setCurrentTopSection(
      TopsterContainerRef.current.childNodes[
        TopsterContainerRef.current.childNodes.length - 1
      ]
    );
    setCurrentTopIndex(TopsterContainerRef.current.childNodes.length - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteConfirmation = () => {
    let newTopster = topsters.filter((item) => item.id !== toBeDeleted);
    setTopsters([...newTopster]);
    setDeleteDialog(!deleteDialog);
  };

  const handleLandingModal = () => {
    history.push('/');
    setTimeout(() => {
      setOpenLandingModal(true);
    }, 100);
  };

  const divideBySection = (type: typeof recommended | typeof topsters) => {
    var sectionLength = type === recommended ? 5 : 8;
    let copy = [...type];
    let grouping = [];
    while (copy.length) grouping.push(copy.splice(0, sectionLength));
    return grouping;
  };

  const handleArrows = (direction: string) => {
    if (direction === 'next' && currentRecSection.nextSibling) {
      currentRecSection.nextSibling?.scrollIntoView({ behavior: 'smooth' });
      setCurrentRecSection(currentRecSection.nextSibling);
      setCurrentRecIndex(currentRecIndex + 1);
    }
    if (direction === 'previous' && currentRecSection.previousSibling) {
      currentRecSection.previousSibling?.scrollIntoView({ behavior: 'smooth' });
      setCurrentRecSection(currentRecSection.previousSibling);
      setCurrentRecIndex(currentRecIndex - 1);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.BackButton}>
        <Tooltip title="Landing">
          <ArrowBackIcon
            fontSize="large"
            onClick={handleLandingModal}
            style={{ cursor: 'pointer' }}
          />
        </Tooltip>
      </div>
      <div className={classes.OuterContainer}>
        <nav className={classes.nav} />
        <div className={classes.RecommendedTitleContainer}>
          <h2 className={classes.RecommendedTitle}>Recommended</h2>
          <DotNavigation
            type={recommended}
            recommended={recommended}
            topsters={topsters}
            currentRecIndex={currentRecIndex}
            setCurrentRecSection={setCurrentRecSection}
            setCurrentRecIndex={setCurrentRecIndex}
            currentTopsterIndex={currentTopIndex}
            setCurrentTopSection={setCurrentTopSection}
            setCurrentTopIndex={setCurrentTopIndex}
            RecommendedSectionalRef={RecommendedSectionalRef}
            TopsterContainerRef={TopsterContainerRef}
          />
        </div>
        <div className={classes.RecommendedContainer}>
          <ArrowLeftIcon
            className={
              currentRecSection && currentRecSection.previousSibling
                ? classes.recommendedArrowVisible
                : classes.recommendedArrowHidden
            }
            color="primary"
            onClick={() => handleArrows('previous')}
          />
          <TransitionGroup className={classes.RecommendedTopsters}>
            {divideBySection(recommended).map((group, i) => (
              // Recommended Sectional
              <CSSTransition
                classNames="fade"
                timeout={500}
                key={`recommended-group-${i}`}
              >
                <section
                  className={classes.RecommendedSection}
                  ref={RecommendedSectionalRef}
                >
                  {group.map((item: TopsterTemplate) => (
                    <Recommended
                      {...item}
                      handleClick={() =>
                        history.push(`/recommended/${item.id}`)
                      }
                      id={item.id}
                      recommended={recommended}
                      title={item.title}
                      key={`group-item-${item.id}`}
                    />
                  ))}
                </section>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <ArrowRightIcon
            className={
              currentRecSection && currentRecSection.nextSibling
                ? classes.recommendedArrowVisible
                : classes.recommendedArrowHidden
            }
            color="primary"
            onClick={() => handleArrows('next')}
          />
        </div>
        <SubMainHeading bookmarks={bookmarks} history={history} />
        {/* submain-body */}
        <div className={classes.subMain}>
          <DotNavigation
            type={topsters}
            recommended={recommended}
            topsters={topsters}
            currentRecIndex={currentRecIndex}
            setCurrentRecSection={setCurrentRecSection}
            setCurrentRecIndex={setCurrentRecIndex}
            currentTopsterIndex={currentTopIndex}
            setCurrentTopSection={setCurrentTopSection}
            setCurrentTopIndex={setCurrentTopIndex}
            RecommendedSectionalRef={RecommendedSectionalRef}
            TopsterContainerRef={TopsterContainerRef}
          />
          <div className={classes.UserTopsters} ref={TopsterContainerRef}>
            {divideBySection(topsters).map((group, i) => (
              // Topster Sectional
              <div
                key={`userTopsters-group-${i}`}
                className={classes.topstersSection}
              >
                {group.map((item: TopsterTemplate) => (
                  <CSSTransition key={item.id} classNames="fade" timeout={500}>
                    <UserTopsters
                      {...item}
                      handleClick={() => history.push(`/topsters/${item.id}`)}
                      id={item.id}
                      deleteDialog={deleteDialog}
                      setDeleteDialog={setDeleteDialog}
                      setToBeDeleted={setToBeDeleted}
                    />
                  </CSSTransition>
                ))}
                <div ref={elementRef} />
              </div>
            ))}
          </div>
          <UpNext bookmarks={bookmarks} history={history} />
        </div>
      </div>
      <DeleteModal
        handleDeleteConfirmation={handleDeleteConfirmation}
        deleteDialog={deleteDialog}
        setDeleteDialog={setDeleteDialog}
      />
    </div>
  );
};

export default withStyles(styles)(Main);
