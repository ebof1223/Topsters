import { TopsterTemplate } from '../interface';
import { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './main-styles/Main-styles';
import DeleteModal from './DeleteModal';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import RecommendedSection from './RecommendedSection';
import UserTopstersSection from './UserTopstersSection';
import BookmarksSection from './BookmarksSection';

interface Props {
  classes: {
    root: string;
    BackButton: string;
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
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);
  // const [currentRecSection, setCurrentRecSection] = useState(null);
  // const [currentTopSection, setCurrentTopSection] = useState(null);
  // const [currentRecIndex, setCurrentRecIndex] = useState(0);
  // const [currentTopIndex, setCurrentTopIndex] = useState(null);

  // useEffect(() => {
  //   setCurrentRecSection(
  //     RecommendedSectionalRef.current.parentElement.childNodes[currentRecIndex]
  //   );
  //   setCurrentTopSection(
  //     TopsterContainerRef.current.childNodes[
  //       TopsterContainerRef.current.childNodes.length - 1
  //     ]
  //   );
  //   setCurrentTopIndex(TopsterContainerRef.current.childNodes.length - 1);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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

  // const divideBySection = (type: typeof recommended | typeof topsters) => {
  //   var sectionLength = type === recommended ? 5 : 8;
  //   let copy = [...type];
  //   let grouping = [];
  //   while (copy.length) grouping.push(copy.splice(0, sectionLength));
  //   return grouping;
  // };

  // const handleRecArrows = (direction: string) => {
  //   if (direction === 'next' && currentRecSection.nextSibling) {
  //     currentRecSection.nextSibling?.scrollIntoView({ behavior: 'smooth' });
  //     setCurrentRecSection(currentRecSection.nextSibling);
  //     setCurrentRecIndex(currentRecIndex + 1);
  //   }
  //   if (direction === 'previous' && currentRecSection.previousSibling) {
  //     currentRecSection.previousSibling?.scrollIntoView({ behavior: 'smooth' });
  //     setCurrentRecSection(currentRecSection.previousSibling);
  //     setCurrentRecIndex(currentRecIndex - 1);
  //   }
  // };
  // const handleTopArrows = (direction: string) => {
  //   if (direction === 'next' && currentTopSection.nextSibling) {
  //     currentTopSection.nextSibling?.scrollIntoView({ behavior: 'smooth' });
  //     setCurrentTopSection(currentTopSection.nextSibling);
  //     setCurrentTopIndex(currentTopIndex + 1);
  //   }
  //   if (direction === 'previous' && currentTopSection.previousSibling) {
  //     currentTopSection.previousSibling?.scrollIntoView({ behavior: 'smooth' });
  //     setCurrentTopSection(currentTopSection.previousSibling);
  //     setCurrentTopIndex(currentTopIndex - 1);
  //   }
  // };
  return (
    <>
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
        <RecommendedSection recommended={recommended} history={history} />
        <UserTopstersSection
          history={history}
          deleteDialog={deleteDialog}
          setDeleteDialog={setDeleteDialog}
          setToBeDeleted={setToBeDeleted}
          topsters={topsters}
        />
        <BookmarksSection bookmarks={bookmarks} history={history} />
      </div>
      <DeleteModal
        handleDeleteConfirmation={handleDeleteConfirmation}
        deleteDialog={deleteDialog}
        setDeleteDialog={setDeleteDialog}
      />
    </>
  );
};

export default withStyles(styles)(Main);
