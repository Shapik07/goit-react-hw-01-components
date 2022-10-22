import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.spacing(150)};
  margin-bottom: ${props => props.theme.spacing(24)};
`;
export const FriendsListElement = styled.li`
  display: flex;
  margin-bottom: ${props => props.theme.spacing(6)};
  background-color: ${props => props.theme.colors.white};
  align-items: center;
  padding-left: ${props => props.theme.spacing(3)};
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
  border-radius: ${props => props.theme.radii.standard};
`;
export const FriendsListElementStatus = styled.span`
  padding-right: ${props => props.theme.spacing(3)};
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
  margin-top: ${props => props.theme.spacing(6)};
  margin-bottom: ${props => props.theme.spacing(6)};
  margin-right: ${props => props.theme.spacing(3)};
`;
export const FriendsListElementName = styled.p`
  font-size: ${props => props.theme.fontSizes.big};
  font-weight: bold;
`;
