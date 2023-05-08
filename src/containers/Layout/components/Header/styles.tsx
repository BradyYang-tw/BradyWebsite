import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  width: 100%;
  // height: 200px;
  background-color: rgb(56, 56, 56);
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0px 100px;
`;

export const HeaderLogo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Heebo&display=swap");
  font-size: 24px;
  font-family: "Heebo", sans-serif;
  color: white;
  padding: 10px;
`;

export const HeaderNavGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const HeaderNavList = styled.li`
  // remove li style
  list-style-type: none;
  color: white;
  width: 30%;
`;

export const HeaderNavLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Heebo&display=swap");
  // remove a style
  color: inherit; /* 移除超連結顏色 */
  text-decoration: none; /* 移除超連結底線 */
  display: block; /* 讓 <a> 填滿 <li> */

  cursor: pointer;
  font-size: 24px;
  font-family: "Heebo", sans-serif;
  padding: 10px;

  &:hover {
    font-size: 36px;
    color: black;
    background-color: rgb(115, 115, 115);
  }
`;
