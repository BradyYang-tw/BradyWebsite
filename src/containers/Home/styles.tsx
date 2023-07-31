import styled, { keyframes } from "styled-components";
import kobe1 from "@/static/k6.jpg";

const showRight = keyframes`
  100% {
    width: 0;
  }
`;

const typeing = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const homeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10%;
  height: 100vh;
  background: url(${kobe1}) no-repeat;
  background-size: cover;
  // background-position: center;
`;

export const introduce = styled.div`
  // border: 1px solid white;
  max-width: 600px;
`;

export const introduceTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,600&display=swap");
  font-family: "Rubik", sans-serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
  color: transparent;

  // &:before {
  //   content: "";
  //   position absolute;
  //   top: 0;
  //   right: 0;
  //   width: 100%;
  //   height: 100%;
  //   color: white;
  //   background: #081B29;
  //   animation: ${showRight} 1s ease forwards;
  //   animation-delay: 1s;
  // }

  // -webkit-transform: translate(-50%, -50%);
  // -ms-transform: translate(-50%, -50%);
  // transform: translate(-50%, -50%);
  // text-transform: uppercase;
  // margin: 0;
  // padding: 0;
  letter-spacing: 5px;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    color: #fff;
    overflow: hidden;
    // border-right: 1px solid #ffffff;
    animation: ${typeing} 1s steps(13);
    -webkit-animation: ${typeing} 1s steps(13);
    white-space: nowrap;
  }
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
