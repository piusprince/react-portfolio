import styled from "styled-components";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import { Link } from "react-router-dom";
import { device } from "../../breakpoints";

export const FooterWrapper = withReveal(
  styled.footer`
    padding: 5rem;
    margin: 0;
    background-image: linear-gradient(to left bottom, #33345a, #051937);

    @media ${device.tablet} {
    }

    @media ${device.mobileS} {
      width: 100%;
    }
  `,
  <Fade bottom />
);

export const FooterLogoWrapper = styled.div`
  display: flex;
`;

export const FooterImg = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
`;

export const FooterText = styled(Link)`
  font-size: 1.6rem;
  color: #fff;
  text-decoration: none;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const FooterLink = styled(Link)`
  padding-right: 2rem;
  font-size: 2rem;
  color: #60ecbd;

  &:hover {
    color: yellow;
  }
`;

export const FooterMessage = styled.p`
  color: #928787;
  margin-top: 1rem;
  font-size: 1rem;
`;
