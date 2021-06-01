import { withStyles } from '@material-ui/styles';
import { useLayoutEffect, useState } from 'react';
import styles from './styles/CharacterCounterStyles';

interface Props {
  userToppingsNameLength: number;
  classes: {
    root: string;
  };
}

const CharacterCounter: React.FC<Props> = ({
  classes,
  userToppingsNameLength,
}) => {
  const [ringState, setRingState] = useState({
    ringStyle: {
      stroke: '',
      strokeDasharray: '',
    },
  });
  const circleLength = 2 * Math.PI * 15;
  const colored = (circleLength * userToppingsNameLength) / 21;
  const gray = circleLength - colored > 0 ? circleLength - colored : 0;
  const twitterBlue = 'rgb(29, 161, 242)';

  useLayoutEffect(() => {
    setRingState({
      ringStyle: {
        stroke:
          21 - userToppingsNameLength <= 0
            ? 'red'
            : 21 - userToppingsNameLength <= 10
            ? 'orange'
            : twitterBlue,
        strokeDasharray: `${colored} ${gray}`,
      },
    });
  }, [circleLength, colored, gray, userToppingsNameLength]);
  return (
    <svg className={classes.root}>
      <circle r="15" cx="50%" cy="50%" stroke="lightgray"></circle>
      <circle
        r="15"
        cx="50%"
        cy="50%"
        style={{
          ...ringState.ringStyle,
        }}
      ></circle>
    </svg>
  );
};

export default withStyles(styles)(CharacterCounter);
