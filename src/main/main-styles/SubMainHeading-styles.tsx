import { createStyles } from '@material-ui/core';

const styles = createStyles({
  subMainTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'start',
  },
  BookmarkTitle: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    alignSelf: 'center',
    marginLeft: '57%',
  },
  BookmarkCapacity: { fontSize: '14px', paddingLeft: '10px' },
  Fab: {
    display: 'flex',
    top: '40%',
    left: '50%',
  },
});

export default styles;
