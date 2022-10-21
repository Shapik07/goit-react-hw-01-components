import styled from '@emotion/styled';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 96px;
`;

export const Avatar = styled.img`
  width: 300px;
  heigh: 300px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, blue 50%, yellow 50%);
`;

export const UserName = styled.p`
  color: black;
  font-weight: bold;
  font-size: 48px;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const UserTag = styled.p`
  color: gray;
  font-size: 24px;
  margin-top: 0px;
  margin-bottom: 12px;
`;

export const UserLocation = styled.p`
  margin-top: 0px;
  margin-bottom: 24px;
  color: gray;
  margin-bottom: 96px;
`;
