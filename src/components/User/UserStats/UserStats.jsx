import PropTypes from 'prop-types';

export const UserStats = ({ stats }) => {
  return (
    <ul className="stats">
      <li id="1">
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li id="2">
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li id="3">
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
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
