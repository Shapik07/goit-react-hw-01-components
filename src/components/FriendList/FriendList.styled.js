import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.elementWidth.s};
  margin-bottom: ${props => props.theme.distances.l};
`;
export const FriendsListElement = styled.li`
  display: flex;
  margin-bottom: ${props => props.theme.distances.s};
  background-color: ${props => props.theme.colors.white};
  align-items: center;
  padding-left: ${props => props.theme.distances.xs};
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
  border-radius: ${props => props.theme.radii.standard};
`;
export const FriendsListElementStatus = styled.span`
  padding-right: ${props => props.theme.distances.xs};
  width: 50px;
  border-radius: 50%;
  background-color: ${({ eventType, theme }) =>
    eventType ? theme.colors.green : theme.colors.red};
`;

export const FriendsListElementAvatar = styled.img`
  width: 150px;
  border-radius: ${props => props.theme.radii.standard};
  background-image: ${props =>
    `linear-gradient(to bottom, ${props.theme.colors.blue} 50%, ${props.theme.colors.yellow} 50%)`};
  margin-top: ${props => props.theme.distances.s};
  margin-bottom: ${props => props.theme.distances.s};
  margin-right: ${props => props.theme.distances.xs};
`;
export const FriendsListElementName = styled.p`
  font-size: ${props => props.theme.fontSizes.big};
  font-weight: bold;
`;
