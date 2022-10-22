import styled from '@emotion/styled';

export const UserStatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0px;
  padding-left: 0px;
  width: 100%;
  border-top: 1px solid #696969;
`;
export const UserStatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dcdcdc;
  border-right: 1px solid black;
  &:nth-of-type(3) {
    border-right: none;
    border-bottom-right-radius: 15px;
  }
  &:nth-of-type(1, 2) {
    border-bottom-left-radius: 15px;
  }
`;
export const UserStatsItemLabel = styled.span`
  margin-top: 24px;
  font-size: 24px;
  color: #808080;
`;

export const UserStatsItemQuantity = styled.span`
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 24px;
`;
