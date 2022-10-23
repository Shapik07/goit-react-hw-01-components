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
          <FriendsListElementStatus className="status" eventType={isOnline}>
            &nbsp;
          </FriendsListElementStatus>
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
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
