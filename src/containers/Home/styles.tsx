import styled from "styled-components";

export const homeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10%;
  height: 100vh;
`;

export const introduce = styled.div`
  border: 1px solid white;
  max-width: 600px;
`;

export const introduceTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,600&display=swap");
  font-family: "Rubik", sans-serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
`;

export const introduceContent = styled.p`
  margin: 20px 0 40px;
  font-size: 16px;
`;

export const jobtitle = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Bitter&family=Rubik:ital,wght@1,600&display=swap");
  font-family: "Bitter", serif;
  font-family: "Rubik", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #00abf0;
`;

export const homeImage = styled.img`
  // 如果沒有設定這個image會直接照原比例將畫面撐開
  max-height: 100%;
  max-width: 100%;
`;

export const buttonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  height: 50px;
  width: 345px;
`;

export const homeButton = styled.button`
  width: 150px;
  height: 100%;
  background: #00abf0;
  border: 2px solid #00abf0;
  border-radius: 8px;
  cursor: pointer;
  color: #081b29;
  font-weight: 600;
  letter-spacing: 1px;

  &:nth-child(2) {
    background: transparent;
    color: white;
  }
`;
