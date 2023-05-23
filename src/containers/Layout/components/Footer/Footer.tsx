import React from "react";
import * as Style from "./styles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const faPropIcon = faGithub as IconProp;
const faPropIcon2 = faTwitter as IconProp;
const faPropIcon3 = faLinkedin as IconProp;
const Footer = () => {
  return (
    <Style.footerContainer>
      <Style.iconGroup>
        <Style.wrapIcon>
          <Style.myIcon icon={faPropIcon} />
        </Style.wrapIcon>
        <Style.wrapIcon>
          <Style.myIcon icon={faPropIcon2} />
        </Style.wrapIcon>
        <Style.wrapIcon>
          <Style.myIcon icon={faPropIcon3} />
        </Style.wrapIcon>
      </Style.iconGroup>
      <p>Copyright © 2022 Brady All rights reserved</p>
    </Style.footerContainer>
  );
};

export default Footer;
