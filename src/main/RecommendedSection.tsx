import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import RecommendedTopsters from './RecommendedTopsters';
import recommendedAll from './recommended-sample';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { TopsterTemplate } from '../interface';
import styles from './main-styles/RecommendedSection-styles';

interface Props {
  classes: {
    sectionWrapper: string;
    RecommendedTitle: string;
    RecommendedTopsters: string;
    RecommendedContainer: string;
    recommendedArrowVisible: string;
  };
  recommended?: TopsterTemplate[];
  history: {
    push: (input: string) => void;
  };
}
const RecommendedSection: React.FC<Props> = ({
  classes,
  recommended,
  history,
}) => {
  return (
    <section className={classes.sectionWrapper}>
      <h2 className={classes.RecommendedTitle}>Recommended</h2>
      <div className={classes.RecommendedContainer}>
        <ArrowLeftIcon
          className={classes.recommendedArrowVisible}
          color="primary"
          // onClick={() => handleRecArrows('previous')}
        />
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={500}>
            <div className={classes.RecommendedTopsters}>
              {/* FIIXXXXXXX */}
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
            </div>
          </CSSTransition>
        </TransitionGroup>
        <ArrowRightIcon
          className={classes.recommendedArrowVisible}
          color="primary"
        />
      </div>
    </section>
  );
};
export default withStyles(styles)(RecommendedSection);
