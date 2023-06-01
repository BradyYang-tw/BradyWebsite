import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const myIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

export const wrapIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
  border: 2px solid #00abf0;
  border-radius: 50%;
  color: #00abf0;
  z-index: 1;
  width: 40px;
  height: 40px;
  overflow: hidden;

  &::before {
    content: "";
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    z-index: -1;
    transition: 0.5s;
  }
  &:hover::before {
    width: 100%;
  }
`;

export const iconGroup = styled.div`
  width: 15%;
  font-size: 32px;
  display: flex;
  justify-content: space-around;
`;

export const footerContainer = styled.footer`
  position: absolute;
  bottom: 0px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
