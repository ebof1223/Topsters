import { withStyles } from '@material-ui/styles';
import { TopsterTemplate } from '../interface';
import styles from './main-styles/DotNavigation-styles';

interface Props {
  classes: {
    dotContainerHorizontal: string;
    dotContainerVertical: string;
    dotsHorizontalActive: string;
    dotsHorizontalInactive: string;
    dotsVerticalActive: string;
    dotsVerticalInactive: string;
  };
  type: TopsterTemplate[];
  recommended: TopsterTemplate[];
  topsters: TopsterTemplate[];
  currentRecIndex: Number;
  currentTopsterIndex: Number;
  setCurrentRecSection: React.Dispatch<any>;
  setCurrentRecIndex: React.Dispatch<any>;
  setCurrentTopSection: React.Dispatch<any>;
  setCurrentTopIndex: React.Dispatch<any>;
  RecommendedSectionalRef: React.MutableRefObject<any>;
  TopsterContainerRef: React.MutableRefObject<any>;
}

const DotNavigation: React.FC<Props> = ({
  classes,
  type,
  recommended,
  topsters,
  currentRecIndex,
  currentTopsterIndex,
  setCurrentRecSection,
  setCurrentRecIndex,
  setCurrentTopSection,
  setCurrentTopIndex,
  RecommendedSectionalRef,
  TopsterContainerRef,
}) => {
  var sectionLength = type === recommended ? 5 : 8;
  var arrayPerSection = new Array(Math.ceil(type.length / sectionLength)).fill(
    0
  );

  return (
    <div
      className={
        type === recommended
          ? classes.dotContainerHorizontal
          : classes.dotContainerVertical
      }
    >
      {arrayPerSection.map((item: null, i: number) => (
        <div
          className={
            (type === recommended &&
              (i === currentRecIndex
                ? classes.dotsHorizontalActive
                : classes.dotsHorizontalInactive)) ||
            (type === topsters &&
              (i === currentTopsterIndex
                ? classes.dotsVerticalActive
                : classes.dotsVerticalInactive))
          }
          key={`recommended-dot-${i}`}
          onClick={() => {
            if (type === recommended) {
              let element =
                RecommendedSectionalRef.current.parentElement.childNodes[i];
              element.scrollIntoView({ behavior: 'smooth' });
              setCurrentRecSection(element);
              setCurrentRecIndex(i);
            }
            if (type === topsters) {
              let element = TopsterContainerRef.current.childNodes[i];
              element.scrollIntoView({ behavior: 'smooth' });
              setCurrentTopSection(element);
              setCurrentTopIndex(i);
            }
          }}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(DotNavigation);
