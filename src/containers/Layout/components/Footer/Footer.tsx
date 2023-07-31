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
          <a href="https://github.com/BradyYang-tw" target="_blank">
            <Style.myIcon
              icon={faPropIcon}
              onClick={() => {
                console.log("hi");
              }}
            />
          </a>
        </Style.wrapIcon>
        <Style.wrapIcon>
          <Style.myIcon icon={faPropIcon2} />
        </Style.wrapIcon>
        <Style.wrapIcon>
          <Style.myIcon icon={faPropIcon3} />
        </Style.wrapIcon>
      </Style.iconGroup>
      <p>Copyright © 2023 Brady All rights reserved</p>
    </Style.footerContainer>
  );
};

export default Footer;
