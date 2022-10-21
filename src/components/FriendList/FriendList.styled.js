import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 600px;
`;
export const FriendsListElement = styled.li`
  display: flex;
  heigh: 200px;
  margin-bottom: 24px;
  background-color: white;
  align-items: center;
  padding-left: 12px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;
export const FriendsListElementStatus = styled.span`
  padding-right: 12px;
  width: 50px;
  heigh: 50px;
  background-color: ${({ eventType }) => (eventType ? '#00FF00' : '#FF0000')};
`;

export const FriendsListElementAvatar = styled.img`
  width: 150px;
  border-radius: 15px;
  background-image: linear-gradient(to bottom, blue 50%, yellow 50%);
  margin-top: 24px;
  margin-bottom: 24px;
  margin-right: 12px;
`;
export const FriendsListElementName = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

// style={{ backgroundColor: `#${isOnline ? '00FF00 ' : }` }}
