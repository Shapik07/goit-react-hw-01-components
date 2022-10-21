import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
} from './UserDescription.styled';

export const UserDescription = ({ avatar, username, tag, location }) => {
  return (
    <Description className="description">
      <Avatar src={avatar} alt="User avatar" className="avatar" />
      <UserName className="name">{username}</UserName>
      <UserTag className="tag">@{tag}</UserTag>
      <UserLocation className="location">{location}</UserLocation>
    </Description>
  );
};

UserDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
