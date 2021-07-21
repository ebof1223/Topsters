import { createStyles } from '@material-ui/core';

const styles = createStyles({
  dotContainerHorizontal: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: '2rem',
    cursor: 'pointer',
  },

  dotContainerVertical: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginRight: '2rem',
    cursor: 'pointer',
  },
  dotsHorizontalActive: {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    background: 'hsla(0, 0%, 100%, .8)',
    marginLeft: '1rem',
    transform: 'scale(1.5)',
  },
  dotsHorizontalInactive: {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    background: 'hsla(0, 0%, 100%, .8)',
    marginLeft: '1rem',
    opacity: '0.3',
  },
  dotsVerticalActive: {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    background: 'hsla(0, 0%, 100%, .8)',
    marginBottom: '1rem',
    transform: 'scale(1.5)',
  },
  dotsVerticalInactive: {
    width: '10px',
    height: '10px',
    borderRadius: '50px',
    background: 'hsla(0, 0%, 100%, .8)',
    marginBottom: '1rem',
    opacity: '0.3',
  },
});

export default styles;
