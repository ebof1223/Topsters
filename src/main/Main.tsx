import { useEffect, useRef, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TopsterTemplate } from '../interface';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './main-styles/Main-styles';
import UserTopsters from './UserTopsters';
import DeleteModal from './DeleteModal';
import Recommended from './Recommended';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

interface Props {
  classes: {
    root: string;
    heading: string;
    OuterContainer: string;
    nav: string;
    Recommended: string;
    Fab: string;
    UserTopsters: string;
    RecommendedTitle: string;
    UserTitleContainer: string;
    BackButton: string;
    subMain: string;
    AOTDContainer: string;
    AOTD: string;
    AOTDTitleContainer: string;
  };
  topsters: TopsterTemplate[];
  history: {
    goBack: () => void;
    push: (input: string) => void;
  };
  setTopsters: (input: TopsterTemplate[]) => void;
  recommended: any;
  setOpenLandingModal: (i: boolean) => void;
}
const Main: React.FC<Props> = ({
  topsters,
  history,
  setTopsters,
  classes,
  recommended,
  setOpenLandingModal,
}) => {
  const AlwaysScrollToBottom = () => {
    const elementRef: React.MutableRefObject<any> = useRef();
    useEffect(() => elementRef.current && elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(null);

  const toTopster = (id: string, type: string) => {
    type === 'recommended'
      ? history.push(`/recommended/${id}`)
      : history.push(`/topsters/${id}`);
  };

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
  return (
    <div className={classes.root}>
      <div onClick={handleLandingModal} className={classes.BackButton}>
        <ArrowBackIcon fontSize="large" />
      </div>
      <div className={classes.OuterContainer}>
        <nav className={classes.nav}></nav>
        <h2 className={classes.RecommendedTitle}>Recommended</h2>
        <TransitionGroup className={classes.Recommended}>
          {recommended.map((item: any) => (
            <CSSTransition key={item.id} classNames="fade" timeout={500}>
              <Recommended
                {...item}
                handleClick={() => toTopster(item.id, 'recommended')}
                id={item.id}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <div className={classes.UserTitleContainer}>
          <h2>My Topsters</h2>
          <Link to={'/topsters/new'}>
            <Tooltip title="Add">
              <Fab
                color="inherit"
                aria-label="add"
                size="small"
                className={classes.Fab}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Link>
        </div>
        <div className={classes.subMain}>
          <div className={classes.UserTopsters}>
            {topsters.map((item: TopsterTemplate) => (
              <CSSTransition key={item.id} classNames="fade" timeout={500}>
                <UserTopsters
                  {...item}
                  handleClick={() => toTopster(item.id, 'userTopster')}
                  id={item.id}
                  deleteDialog={deleteDialog}
                  setDeleteDialog={setDeleteDialog}
                  setToBeDeleted={setToBeDeleted}
                />
              </CSSTransition>
            ))}
            <AlwaysScrollToBottom />
          </div>
          <div className={classes.AOTDContainer}>
            <div className={classes.AOTD}>
              <BookmarksIcon
                style={{
                  zIndex: 10,
                  position: 'relative',
                  marginLeft: '90%',
                  marginTop: '2%',
                  color: '#91a7ff',
                  cursor: 'pointer',
                }}
                fontSize="large"
              />
            </div>
          </div>
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
