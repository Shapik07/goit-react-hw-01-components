import PropTypes from 'prop-types';
import {
  UserStatsList,
  UserStatsItem,
  UserStatsItemLabel,
  UserStatsItemQuantity,
} from './UserStats.styled';

export const UserStats = ({ stats }) => {
  return (
    <UserStatsList className="stats">
      <UserStatsItem >
        <UserStatsItemLabel className="label">Followers</UserStatsItemLabel>
        <UserStatsItemQuantity className="quantity">
          {stats.followers}
        </UserStatsItemQuantity>
      </UserStatsItem>
      <UserStatsItem >
        <UserStatsItemLabel className="label">Views</UserStatsItemLabel>
        <UserStatsItemQuantity className="quantity">
          {stats.views}
        </UserStatsItemQuantity>
      </UserStatsItem>
      <UserStatsItem >
        <UserStatsItemLabel className="label">Likes</UserStatsItemLabel>
        <UserStatsItemQuantity className="quantity">
          {stats.likes}
        </UserStatsItemQuantity>
      </UserStatsItem>
    </UserStatsList>
  );
};

UserStats.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
