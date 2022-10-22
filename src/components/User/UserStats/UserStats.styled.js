import styled from '@emotion/styled';

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
