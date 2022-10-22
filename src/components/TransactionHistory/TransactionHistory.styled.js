import styled from '@emotion/styled';

export const Table = styled.table`
  width: ${props => props.theme.elementWidth.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  border-radius: ${props => props.theme.radii.standard};
  margin-bottom: ${props => props.theme.distances.l};
`;

export const Thead = styled.thead`
  background-color: ${props => props.theme.colors.lightBlue};
  border-radius: ${props => props.theme.radii.standard};
  width: 100%;
`;

export const TableString = styled.tr`
  display: flex;
  justify-content: space-around;
  padding-top: ${props => props.theme.distances.xs};
  padding-bottom: ${props => props.theme.distances.xs};
  border-radius: ${props => props.theme.radii.standard};
  font-size: ${props => props.theme.fontSizes.big};
  width: 100%;
`;

export const TableTitleString = styled.th``;

export const Tbody = styled.tbody`
  display: flex;
  width: 100%;
  border-radius: ${props => props.theme.radii.standard};

  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.gray};
  }
`;

export const TableCell = styled.td`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: ${props => props.theme.distances.xs};
  padding-bottom: ${props => props.theme.distances.xs};
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: ${props => props.theme.radii.standard};
  border: ${props => `1px solid ${props.theme.colors.gray}`};
`;
