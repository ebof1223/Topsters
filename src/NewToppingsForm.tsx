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
import { AlbumStructure, ToppingsStructure } from './interface';
import arrayMove from 'array-move';

interface Props {
  saveToppings: (input: any) => void;
  history: {
    push: (input: string) => void;
  };
  toppings: ToppingsStructure[];
  classes: {
    root: string;
    hide: string;
    drawer: string;
    drawerPaper: string;
    drawerHeader: string;
    content: string;
    contentShift: string;
  };
}

const NewToppingsForm: React.FC<Props> = ({
  saveToppings,
  history,
  toppings,
  classes,
}) => {
  const [open, setOpen] = useState(false);
  const [userToppings, setUserToppings] = useState<any>([]);
  const [userToppingsName, setUserToppingsName] = useState<any>('');

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
          <DraggableToppingsList
            axis="xy"
            userToppings={userToppings}
            setUserToppings={setUserToppings}
            onSortStart={() => (document.body.style.cursor = 'grabbing')}
            onSortEnd={onSortEnd}
          />
        </main>
      </div>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(NewToppingsForm);
