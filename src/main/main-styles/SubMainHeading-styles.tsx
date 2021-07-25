import { createStyles } from '@material-ui/core';
import sizes from '../../sizes';

const styles = createStyles({
  subMainTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    [sizes.down('lg')]: {
      marginTop: '0',
    },
  },
  BookmarkTitle: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    alignSelf: 'center',
    marginRight: '25%',
    [sizes.down('xl')]: {
      width: '40%',
      marginRight: '3%',
    },
    [sizes.down('lg')]: {
      // marginLeft: '0',
    },
  },
  BookmarkCapacity: { fontSize: '14px', paddingLeft: '10px' },
  topsterTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    [sizes.down('xl')]: {
      marginLeft: '10%',
    },
  },
  topstersTitle: {
    [sizes.down('lg')]: {
      marginLeft: '-4rem',
    },
  },
  Fab: {
    left: '30%',
  },
});

export default styles;
