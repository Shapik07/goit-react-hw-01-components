import { getRandomColor } from 'helpers/getRandomColor';
import PropTypes from 'prop-types';
import {
  Section,
  Title,
  ListStatistics,
  ListStatisticsElement,
  ListStatisticsElementLabel,
  ListStatisticsElementPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}
      <ListStatistics className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <ListStatisticsElement
            className="item"
            style={{
              backgroundColor: `${getRandomColor()}`,
            }}
            key={id}
          >
            <ListStatisticsElementLabel className="label">
              {label}
            </ListStatisticsElementLabel>
            <ListStatisticsElementPercentage className="percentage">
              {percentage} %
            </ListStatisticsElementPercentage>
          </ListStatisticsElement>
        ))}
      </ListStatistics>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
