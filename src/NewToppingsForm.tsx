import React from 'react';
import { useState } from 'react';
import NewToppingsFormNav from './NewToppingsFormNav';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Search from './Search';
import DraggableToppingsList from './DraggableToppingsList';
import styles from './styles/NewToppingsFormStyles';
import { ToppingsStructure } from './interface';
import arrayMove from 'array-move';

interface Props {
  saveToppings: (input: ToppingsStructure) => void;
  history: {
    push: (input: string) => void;
  };
  // FIX LATER
  match: { params: any };
  toppings: ToppingsStructure[];
  classes: {
    root: string;
    hide: string;
    drawer: string;
    drawerPaper: string;
    drawerHeader: string;
    content: string;
    contentShift: string;
    background: string;
  };
}
const NewToppingsForm: React.FC<Props> = ({
  saveToppings,
  history,
  match,
  toppings,
  classes,
}) => {
  let matchingAlbums = toppings.filter((item) => item.id === match.params.id);
  let editTitle = match.params.id
    ? match.params.id
        .replace(/-/g, ' ')
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    : '';
  console.log(editTitle);
  const editAlbums =
    match.params.id && matchingAlbums.length ? matchingAlbums[0].albums : [];

  const [open, setOpen] = useState(true);
  const [userToppings, setUserToppings] = useState(editAlbums);
  const [userToppingsName, setUserToppingsName] = useState(editTitle);

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    document.body.style.cursor = 'default';
    let newToppings = arrayMove(userToppings, oldIndex, newIndex);
    setUserToppings(newToppings);
  };

  return (
    <>
      <NewToppingsFormNav
        open={open}
        setOpen={setOpen}
        history={history}
        setUserToppings={setUserToppings}
        toppings={toppings}
        saveToppings={saveToppings}
        userToppingsName={userToppingsName}
        userToppings={userToppings}
        setUserToppingsName={setUserToppingsName}
        match={match}
      />
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => setOpen(!open)}>
              <ChevronLeftIcon color="primary" />
            </IconButton>
          </div>
          <Divider />
          <Search
            setUserToppings={setUserToppings}
            userToppings={userToppings}
          />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div className={classes.background}>
            <DraggableToppingsList
              axis="xy"
              userToppings={userToppings}
              setUserToppings={setUserToppings}
              onSortStart={() => (document.body.style.cursor = 'grabbing')}
              onSortEnd={onSortEnd}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(NewToppingsForm);
