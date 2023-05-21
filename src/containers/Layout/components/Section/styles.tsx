import styled from "styled-components";

export const layoutContainer = styled.div`
  // 讓畫面固定100%
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
`;

export const main = styled.section`
  //   flex: 1;
  //   flex-grow: 1;
  height: calc(100vh - 140px);
`;
