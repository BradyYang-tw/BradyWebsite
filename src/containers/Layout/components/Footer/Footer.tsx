import React from "react";
import * as Style from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div>
        <FontAwesomeIcon icon={faPropIcon} />
        <FontAwesomeIcon icon={faPropIcon2} />
        <FontAwesomeIcon icon={faPropIcon3} />
        {/* <FontAwesomeIcon icon="fa-brands fa-square-twitter" /> */}
      </div>
      Copyright © 2022 Brady All rights reserved
    </Style.footerContainer>
  );
};

export default Footer;
