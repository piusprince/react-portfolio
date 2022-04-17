import React from "react";
import {
  FooterWrapper,
  FooterImg,
  FooterText,
  FooterLinksWrapper,
  FooterLink,
  FooterMessage,
  FooterLogoWrapper,
} from "./FooterElements";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ profile }) => {
  return (
    <FooterWrapper>
      <FooterLogoWrapper>
        <FooterImg
          src={profile}
          alt="personal image"
          loading="lazy"
          decoding="async"
        />
        <FooterText to="/">Pius Prince</FooterText>
      </FooterLogoWrapper>
      <FooterLinksWrapper>
        <FooterLink
          to={{ pathname: "https://github.com/piusprince" }}
          target="_blank"
        >
          <FaGithub />
        </FooterLink>

        <FooterLink
          to={{
            pathname:
              "https://www.linkedin.com/in/pius-prince-oduro-92156b1b4/",
          }}
          target="_blank"
        >
          <FaLinkedin />
        </FooterLink>

        <FooterLink
          to={{
            pathname: "https://twitter.com/PiusOPrince",
          }}
          target="_blank"
        >
          <FaTwitter />
        </FooterLink>
      </FooterLinksWrapper>

      <FooterMessage>Built by Pius Prince &copy; by Pius Prince</FooterMessage>
    </FooterWrapper>
  );
};

export default Footer;
