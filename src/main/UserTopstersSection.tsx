import { Fab, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import UserTopsters from './UserTopsters';
import { CSSTransition } from 'react-transition-group';
import styles from './main-styles/UserTopstersSection-styles';
import { useEffect, useRef } from 'react';
import { TopsterTemplate } from '../interface';

interface Props {
  classes: {
    topstersSection: string;
    UserTopsters: string;
    topstersTitle: string;
    topsterTitleContainer: string;
    Fab: string;
    topsterScrollUpIconOn: string;
    topsterScrollDownIconOn: string;
    sectionWrapper: string;
  };
  history: {
    push: (input: string) => void;
  };
  deleteDialog: boolean;
  setDeleteDialog: (input: boolean) => void;
  setToBeDeleted: (input: string) => void;
  topsters: TopsterTemplate[];
}
const UserTopstersSection: React.FC<Props> = ({
  classes,
  history,
  deleteDialog,
  setDeleteDialog,
  setToBeDeleted,
  topsters,
}) => {
  const elementRef: React.MutableRefObject<HTMLDivElement> = useRef();
  useEffect(() => {
    elementRef.current && elementRef.current.scrollIntoView();
  }, []);

  return (
    <section className={classes.sectionWrapper}>
      {/* {currentTopSection && ( */}
      {/* <ExpandLessIcon
        className={classes.topsterScrollUpIconOn}
        onClick={() => handleTopArrows('previous')}
      /> */}
      {/* )} */}
      <div className={classes.topsterTitleContainer}>
        <h2 className={classes.topstersTitle}>My Topsters</h2>
        <div>
          <Tooltip title="Add">
            <Fab
              aria-label="add"
              size="small"
              className={classes.Fab}
              onClick={() => {
                history.push('/topsters/new');
              }}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
      </div>
      <div className={classes.UserTopsters}>
        <div className={classes.topstersSection}>
          {topsters.map((item: TopsterTemplate) => (
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
      </div>
      {/* {currentTopSection && ( */}
      {/* <ExpandMoreIcon
        className={classes.topsterScrollDownIconOn}
        onClick={() => handleTopArrows('next')}
      /> */}
      {/* )} */}
    </section>
  );
};
export default withStyles(styles)(UserTopstersSection);
