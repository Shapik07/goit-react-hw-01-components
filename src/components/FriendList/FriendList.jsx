import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendsListElement,
  FriendsListElementStatus,
  FriendsListElementAvatar,
  FriendsListElementName,
} from './FriendList.styled';

export const FriendList = ({ stats }) => {
  return (
    <FriendsList className="friend-list">
      {stats.map(({ id, avatar, name, isOnline }) => (
        <FriendsListElement className="item" key={id}>
          <FriendsListElementStatus
            className="status"
            eventType={isOnline}
          ></FriendsListElementStatus>
          <FriendsListElementAvatar
            className="avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <FriendsListElementName className="name">
            {name}
          </FriendsListElementName>
        </FriendsListElement>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
