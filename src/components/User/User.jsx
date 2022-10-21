import PropTypes from 'prop-types';
import { UserDescription } from './UserDescription/UserDescription';
import { UserStats } from './UserStats/UserStats';
import {Card} from './User.styled'

export const User = ({ avatar, username, tag, location, stats }) => {
  return (
    <Card className="profile">
      <UserDescription
        key={tag}
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <UserStats stats={stats} />
    </Card>
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
