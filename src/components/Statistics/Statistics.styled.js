import styled from '@emotion/styled';

export const Section = styled.section`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 96px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 48px;
  background-color: white;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const ListStatistics = styled.ul`
  padding-left: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 0;
  margin-bottom: 0;
`;

export const ListStatisticsElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  // background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
`;

export const ListStatisticsElementLabel = styled.span`
  font-size: 24px;
`;

export const ListStatisticsElementPercentage = styled.span`
  font-size: 48px;
  font-weight: bold;
`;
