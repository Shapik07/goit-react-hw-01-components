import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: ${props => `${props.theme.colors.white}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.theme.spacing(150)};
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%),
    0 41.8px 33.4px rgb(0 0 0 / 9%), 0 100px 80px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  border-radius: ${props => `${props.theme.radii.standard}`};
  margin-bottom: ${props => props.theme.spacing(24)};
`;

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

export const UserStatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0px;
  padding-left: 0px;
  width: 100%;
  border-top: ${props => `1px solid ${props.theme.colors.darkGray}`};
`;

export const UserStatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.gray};
  border-right: ${props => `1px solid ${props.theme.colors.darkGray}`};
  &:nth-of-type(3) {
    border-right: none;
    border-bottom-right-radius: ${props => props.theme.radii.standard};
  }
  &:nth-of-type(1) {
    border-bottom-left-radius: ${props => props.theme.radii.standard};
  }
`;
export const UserStatsItemLabel = styled.span`
  margin-top: ${props => props.theme.spacing(6)};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.middleGray};
`;

export const UserStatsItemQuantity = styled.span`
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.big};
  margin-bottom: ${props => props.theme.spacing(6)};
`;
