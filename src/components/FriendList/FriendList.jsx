import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendsList, FriendsListElement } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListElement className="item" key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendsListElement>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
