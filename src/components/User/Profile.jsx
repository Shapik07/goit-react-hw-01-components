import PropTypes from 'prop-types';

import {
  Card,
  Description,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  UserStatsList,
  UserStatsItem,
  UserStatsItemLabel,
  UserStatsItemQuantity,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <Card className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <UserTag className="tag">@{tag}</UserTag>
        <UserLocation className="location">{location}</UserLocation>
      </Description>
      <UserStatsList className="stats">
        <UserStatsItem>
          <UserStatsItemLabel className="label">Followers</UserStatsItemLabel>
          <UserStatsItemQuantity className="quantity">
            {followers}
          </UserStatsItemQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsItemLabel className="label">Views</UserStatsItemLabel>
          <UserStatsItemQuantity className="quantity">
            {views}
          </UserStatsItemQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsItemLabel className="label">Likes</UserStatsItemLabel>
          <UserStatsItemQuantity className="quantity">
            {likes}
          </UserStatsItemQuantity>
        </UserStatsItem>
      </UserStatsList>
    </Card>
  );
};

Profile.propTypes = {
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
