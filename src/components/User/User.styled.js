import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: ${props => `${props.theme.colors.white}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.theme.elementWidth.s};
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%),
    0 41.8px 33.4px rgb(0 0 0 / 9%), 0 100px 80px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  border-radius: ${props => `${props.theme.radii.standard}`};
  margin-bottom: ${props => props.theme.distances.l};
`;