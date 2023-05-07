import * as React from "react";
import * as Style from "./styles";
const Header = () => {
  return (
    <Style.HeaderDiv>
      <Style.HeaderLogo>Brady</Style.HeaderLogo>
      <Style.HeaderNavGroup>
        <Style.HeaderNav>
          <Style.HeaderNavList>
            <Style.HeaderNavLink href="#">Home</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink href="#">About</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink href="#">Projects</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink href="#">Articles</Style.HeaderNavLink>
          </Style.HeaderNavList>
          <Style.HeaderNavList>
            <Style.HeaderNavLink href="#">Contact</Style.HeaderNavLink>
          </Style.HeaderNavList>
        </Style.HeaderNav>
      </Style.HeaderNavGroup>
    </Style.HeaderDiv>
  );
};
export default Header;
