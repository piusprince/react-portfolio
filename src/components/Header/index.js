import React from "react";
import {
  HeaderWrapper,
  HeaderLeftWrapper,
  HeaderMainText,
  HeaderAltText,
  HeaderBtn,
  HeaderRightWrapper,
  HeaderSVG,
} from "./HeaderElements";

const Header = ({ headerSVG }) => {
  return (
    <HeaderWrapper>
      <HeaderLeftWrapper>
        <HeaderMainText>
          I build amazing websites to suite your needs
        </HeaderMainText>
        <HeaderAltText>Building websites for you with love</HeaderAltText>
        <HeaderBtn>Get in touch</HeaderBtn>
      </HeaderLeftWrapper>

      <HeaderRightWrapper>
        <HeaderSVG
          src={headerSVG}
          alt="header image"
          loading="lazy"
          decoding="async"
        />
      </HeaderRightWrapper>
    </HeaderWrapper>
  );
};

export default Header;
