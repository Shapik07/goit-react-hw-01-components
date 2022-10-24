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