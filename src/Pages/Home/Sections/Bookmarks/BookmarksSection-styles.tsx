import { createStyles } from '@material-ui/styles';
import sizes from '../../../../App/Constants/sizes';

const styles = createStyles({
  sectionWrapper: {
    margin: '-5rem auto 0 auto',
    transform: 'scale(0.80)',
    [sizes.down('xs')]: {
      gridArea: 'bookmarks',
    },
    '@media all and (width: 667px) and (height: 375px)': {
      gridArea: 'bookmarks',
    },
  },
  bookmarkContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    borderRadius: '5px',
    border: '3px solid #91a7ff',
    width: '22vw',
    cursor: 'pointer',
    position: 'relative',
    '&:focus, &:hover': {
      filter: 'brightness(115%) saturate(100%)',
    },
    [sizes.down('lg')]: {
      top: '10%',
    },
    [sizes.down('md')]: {
      top: '20%',
    },
    [sizes.down('xs')]: {
      display: 'none',
    },
    '@media all and (width: 667px) and (height: 375px)': {
      display: 'none',
    },
  },
  bookmarkContainerEmpty: {
    borderRadius: '5px',
    border: '3px solid #91a7ff',
    width: '400px',
    height: '400px',
    marginLeft: '5rem',
    cursor: 'pointer',
    position: 'relative',
    textAlign: 'center',
  },
  CompareArrowsIcon: {
    zIndex: 10,
    fontSize: '50px',
    color: '#fff',
    borderRadius: '5px',
    padding: '5px',
    backgroundColor: '#91a7ff',
    opacity: 0.75,
    [sizes.down('lg')]: { display: 'none' },
  },
  firstBookmarkedAlbum: {
    height: '131.5px',

    [sizes.down('lg')]: {
      height: '80px',
    },
    [sizes.down('md')]: {
      height: '60px',
    },
  },

  noBookmarks: {
    marginTop: '40%',
    fontSize: '2rem',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'inherit',
  },
  BookmarkTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    fontSize: '1.5rem',
    marginBottom: '1rem',
    cursor: 'pointer',
  },
  BookmarkCapacity: { fontSize: '1rem', marginLeft: '10px' },
});

export default styles;
