import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const icons = [
    <FaRegThumbsUp />,
    <MdPeople />,
    <MdOutlineProductionQuantityLimits />,
    <GiTreeDoor />,
  ];
  return (
    <div>
      {title && <h3 className={style.title}>Main Statistics</h3>}
      <ul className={style.list}>
        {stats.map(({ id, total, title }, index) => {
          return (
            <li className={style.item} key={id}>
              <StatisticsItem total={total} title={title} icon={icons[index]} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Statistics;
