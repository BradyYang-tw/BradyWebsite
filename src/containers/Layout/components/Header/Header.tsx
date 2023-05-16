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
            <Style.HeaderNavLink to="home">Home</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink to="about">About</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink to="projects">Projects</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink to="articles">Articles</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink to="contact">Contact</Style.HeaderNavLink>
          </Style.HeaderNavList>
        </Style.HeaderNav>
      </Style.HeaderNavGroup>
    </Style.HeaderDiv>
  );
};
export default Header;
