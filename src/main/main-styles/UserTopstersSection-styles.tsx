import { createStyles } from '@material-ui/styles';
import sizes from '../../sizes';

const styles = createStyles({
  sectionWrapper: {
    // marginLeft: '2rem',
    gridColumn: '2/3',
  },
  topsterTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    // [sizes.down('xl')]: {
    //   marginLeft: '10%',
    // },
  },
  topstersTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    fontSize: '2rem',
    // [sizes.down('lg')]: {
    //   marginLeft: '-4rem',
    // },
    // [sizes.down('md')]: {
    //   marginLeft: '-1rem',
    // },
  },
  Fab: {
    marginLeft: '1rem',
  },
  TopstersSection: {
    overflow: 'auto',
    height: '400px',
    // // margin: 'auto',
  },

  UserTopsters: {
    display: 'flex',
    flexWrap: 'wrap',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'start',
  },

  topsterScrollUpIconOn: {
    // position: 'relative',
    // marginLeft: '33%',
    // '&:hover': {
    //   transform: 'scale(2)',
    //   transition: 'background 0.5s ease',
    //   cursor: 'pointer',
    // },
    // [sizes.down('xl')]: {
    //   marginLeft: '27%',
    //   marginBottom: '-2%',
    //   marginTop: '2%',
    // },
    // [sizes.down('lg')]: {
    //   marginLeft: '25%',
    //   marginBottom: '-4%',
    //   marginTop: '2%',
    // },
    // [sizes.down('md')]: {
    //   marginLeft: '20%',
    //   marginBottom: '-12%',
    //   marginTop: '4%',
    // },
    // [sizes.down('xs')]: {
    //   marginLeft: '23%',
    //   marginTop: '-1rem',
    //   top: '2%',
    // },
  },
  topsterScrollDownIconOn: {
    // position: 'relative',
    // marginLeft: '33%',
    // '&:hover': {
    //   transform: 'scale(2)',
    //   transition: 'background 0.5s ease',
    //   cursor: 'pointer',
    // },
    // [sizes.down('xl')]: {
    //   marginLeft: '27%',
    //   marginTop: '-2%',
    // },
    // [sizes.down('lg')]: {
    //   marginLeft: '25%',
    //   marginTop: '-2%',
    // },
    // [sizes.down('md')]: {
    //   marginLeft: '20%',
    //   marginTop: '-8%',
    // },
    // [sizes.down('xs')]: {
    //   marginLeft: '23%',
    //   bottom: '8%',
    // },
  },
});

export default styles;
