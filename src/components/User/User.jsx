import PropTypes from 'prop-types';
import { UserDescription } from './UserDescription/UserDescription';
import { UserStats } from './UserStats/UserStats';

export const User = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className="profile">
      <UserDescription
        key={tag}
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <UserStats
       stats={stats}
      />
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
