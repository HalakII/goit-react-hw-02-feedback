import css from './Statistics.module.css';
import { CiFaceFrown } from 'react-icons/ci';
import { CiFaceMeh } from 'react-icons/ci';
import { CiFaceSmile } from 'react-icons/ci';
import { TbSum } from 'react-icons/tb';
import { GiEternalLove } from 'react-icons/gi';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.listWrapper}>
      <li className={css.listItem}>
        {<CiFaceSmile className={css.icon} />}
        Good: {good}
      </li>
      <li className={css.listItem}>
        {<CiFaceMeh className={css.icon} />}Neutral: {neutral}
      </li>
      <li className={css.listItem}>
        {<CiFaceFrown className={css.icon} />}Bad: {bad}
      </li>
      <li className={css.listItem}>
        {<TbSum className={css.icon} />}Total: {total}
      </li>
      <li className={css.listItem}>
        {<GiEternalLove className={css.iconLast} />}Positive feedback:
        {positivePercentage}%
      </li>
    </ul>
  );
};
