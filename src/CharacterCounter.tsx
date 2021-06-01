import { useLayoutEffect, useState } from 'react';

interface Props {
  userToppingsNameLength: number;
}

const CharacterCounter: React.FC<Props> = (userToppingsNameLength) => {
  let titleLength = userToppingsNameLength.userToppingsNameLength;
  const [ringState, setRingState] = useState({
    ringStyle: {
      stroke: '',
      strokeDasharray: '',
    },
  });
  const circleLength = 2 * Math.PI * 15;
  const colored = (circleLength * titleLength) / 21;
  const gray = circleLength - colored > 0 ? circleLength - colored : 0;
  const twitterBlue = 'rgb(29, 161, 242)';

  useLayoutEffect(() => {
    setRingState({
      ringStyle: {
        stroke:
          21 - titleLength <= 0
            ? 'red'
            : 21 - titleLength <= 10
            ? 'orange'
            : twitterBlue,
        strokeDasharray: `${colored} ${gray}`,
      },
    });
  }, [circleLength, colored, gray, titleLength]);
  return (
    <>
      <svg
        style={{
          width: '15%',
          height: '15%',
          position: 'absolute',
          top: 0,
          right: 0,
          marginTop: '1rem',
        }}
      >
        <circle
          id="gray"
          cx="50%"
          cy="50%"
          r="15"
          stroke="lightgray"
          style={{
            fill: 'none',
            strokeWidth: '3',
          }}
        ></circle>
        <circle
          id="colored"
          cx="50%"
          cy="50%"
          r="15"
          style={{
            fill: 'none',
            strokeWidth: '3',
            ...ringState.ringStyle,
          }}
        ></circle>
      </svg>
    </>
  );
};

export default CharacterCounter;
