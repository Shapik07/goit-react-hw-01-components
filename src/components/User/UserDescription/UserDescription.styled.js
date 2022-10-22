import styled from '@emotion/styled';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.distances.l};
`;

export const Avatar = styled.img`
  width: ${props => props.theme.elementWidth.xs};
  border-radius: 50%;
  background-image: ${props =>
    `linear-gradient(to bottom, ${props.theme.colors.blue} 50%, ${props.theme.colors.yellow} 50%)`};
`;

export const UserName = styled.p`
  color: black;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.big};
  margin-top: ${props => props.theme.distances.s};
  margin-bottom: ${props => props.theme.distances.xs};
`;

export const UserTag = styled.p`
  color: gray;
  font-size: ${props => props.theme.fontSizes.small};
  margin-top: 0px;
  margin-bottom: ${props => props.theme.distances.xs};
`;

export const UserLocation = styled.p`
  margin-top: 0px;
  margin-bottom: ${props => props.theme.distances.s};
  color: ${props => props.theme.colors.middleGray};
  margin-bottom: ${props => props.theme.distances.l};
`;
