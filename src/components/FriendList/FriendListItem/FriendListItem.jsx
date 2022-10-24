import PropTypes from 'prop-types';
import {
  FriendsListElementStatus,
  FriendsListElementAvatar,
  FriendsListElementName,
} from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <FriendsListElementStatus className="status" eventType={isOnline}>
        &nbsp;
      </FriendsListElementStatus>
      <FriendsListElementAvatar
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <FriendsListElementName className="name">{name}</FriendsListElementName>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
