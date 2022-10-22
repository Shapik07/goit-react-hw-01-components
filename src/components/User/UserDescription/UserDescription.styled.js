import styled from '@emotion/styled';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.spacing(24)};
`;

export const Avatar = styled.img`
  width: ${props => props.theme.spacing(75)};
  border-radius: 50%;
  background-image: ${props =>
    `linear-gradient(to bottom, ${props.theme.colors.blue} 50%, ${props.theme.colors.yellow} 50%)`};
`;

export const UserName = styled.p`
  color: black;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.big};
  margin-top: ${props => props.theme.spacing(6)};
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const UserTag = styled.p`
  color: gray;
  font-size: ${props => props.theme.fontSizes.small};
  margin-top: 0px;
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const UserLocation = styled.p`
  margin-top: 0px;
  margin-bottom: ${props => props.theme.spacing(6)};
  color: ${props => props.theme.colors.middleGray};
  margin-bottom: ${props => props.theme.spacing(24)};
`;
