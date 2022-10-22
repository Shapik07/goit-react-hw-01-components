import styled from '@emotion/styled';

export const Table = styled.table`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin-bottom: 96px;
`;

export const Thead = styled.thead`
  background-color: #1e90ff;
  border-radius: 15px;
  width: 100%;
`;

export const TableString = styled.tr`
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  font-size: 48px;
  width: 100%;
  border: 1px solid #b0c4de;
`;

export const TableTitleString = styled.th`
`;

export const Tbody = styled.tbody`
  display: flex;
  width: 100%;
  border-radius: 15px;

  &:nth-of-type(even) {
    background-color: #dcdcdc;
  }
`;

export const TableCell = styled.td`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 48px;
  border-radius: 15px;
  border: 1px solid #b0c4de;
`;
