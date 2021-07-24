import { createStyles } from '@material-ui/core';
import sizes from '../../sizes';

const styles = createStyles({
  subMainTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
  BookmarkCapacity: { fontSize: '14px', paddingLeft: '10px' },
  topsterTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    [sizes.down('xl')]: {
      marginLeft: '13%',
    },
  },
  topstersTitle: {},
  Fab: {
    left: '30%',
  },
});

export default styles;
