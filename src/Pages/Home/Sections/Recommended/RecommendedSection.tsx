import React from 'react';
import Carousel from 'react-elastic-carousel';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RecommendedTopsters from './Components/RecommendedTopsters/RecommendedTopsters';
import recommendedAll from './Data/RecommendedData';
import styles from './RecommendedSection-styles';
import { TopsterTemplate } from '../../../../App/Constants/interface';
import { withStyles } from '@material-ui/styles';

interface Props {
  classes: {
    sectionWrapper: string;
    RecommendedTitle: string;
    RecommendedTopsters: string;
    RecommendedContainer: string;
  };
  recommended?: TopsterTemplate[];
  history: {
    push: (input: string) => void;
  };
}
const breakPoints = [
  { width: 200, itemsToShow: 1, itemsToScroll: 1 },
  { width: 300, itemsToShow: 2, itemstoScroll: 2 },
  { width: 600, itemsToShow: 3, itemsToScroll: 3 },
  { width: 900, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
];
const RecommendedSection: React.FC<Props> = ({
  classes,
  recommended,
  history,
}) => {
  return (
    <section className={classes.sectionWrapper}>
      <h2 className={classes.RecommendedTitle}>Recommended</h2>
      <div className={classes.RecommendedContainer}>
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={500}>
            <div className={classes.RecommendedTopsters}>
              <Carousel isRTL={true} breakPoints={breakPoints}>
                {recommendedAll.map((item: any) => (
                  <RecommendedTopsters
                    {...item}
                    handleClick={() => history.push(`/recommended/${item.id}`)}
                    id={item.id}
                    recommended={recommended}
                    title={item.title}
                    key={`${item.id}`}
                  />
                ))}
              </Carousel>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </section>
  );
};
export default withStyles(styles)(RecommendedSection);
