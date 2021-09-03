import styles from './CharacterCounterStyles';
import { useLayoutEffect, useState } from 'react';
import { withStyles } from '@material-ui/styles';

interface Props {
  newTopsterNameLength: number;
  classes: {
    root: string;
  };
}

const CharacterCounter: React.FC<Props> = ({
  classes,
  newTopsterNameLength,
}) => {
  const [ringState, setRingState] = useState({
    ringStyle: {
      stroke: '',
      strokeDasharray: '',
    },
  });
  const circleLength = 2 * Math.PI * 15;
  const colored = (circleLength * newTopsterNameLength) / 21;
  const gray = circleLength - colored > 0 ? circleLength - colored : 0;
  const twitterBlue = 'rgb(29, 161, 242)';

  //re-renders on every user character input to update fill on circle, indicating character counter
  useLayoutEffect(() => {
    setRingState({
      ringStyle: {
        stroke:
          21 - newTopsterNameLength <= 0
            ? 'red'
            : 21 - newTopsterNameLength <= 10
            ? 'orange'
            : twitterBlue,
        strokeDasharray: `${colored} ${gray}`,
      },
    });
  }, [circleLength, colored, gray, newTopsterNameLength]);

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
