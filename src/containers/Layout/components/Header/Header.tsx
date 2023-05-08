import * as React from "react";
import * as Style from "./styles";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Style.HeaderDiv>
      <Style.HeaderLogo>Brady</Style.HeaderLogo>
      <Style.HeaderNavGroup>
        <Style.HeaderNav>
          <Style.HeaderNavList>
            <Style.HeaderNavLink to="/home">Home</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink to="#">About</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink to="#">Projects</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink to="#">Articles</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink to="#">Contact</Style.HeaderNavLink>
          </Style.HeaderNavList>
        </Style.HeaderNav>
      </Style.HeaderNavGroup>
    </Style.HeaderDiv>
  );
};
export default Header;
