import styled from "styled-components";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import { device } from "../../breakpoints";
import { Link } from "react-router-dom";

export const WorkWrapper = styled.section`
  margin-top: 5rem;
  padding: 2rem 5rem;
`;

export const WorkTitle = withReveal(
  styled.h2`
    text-align: center;
    font-size: 3.2rem;
    color: #051937;
    margin-bottom: 5rem;
  `,
  <Fade bottom />
);

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas: "a b";
  margin-bottom: 5rem;

  &:nth-child(3) {
    grid-template-areas: "b a";
    column-gap: 10rem;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
  }
`;

export const ProjectTextContainer = styled.div`
  grid-area: a;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const ProjectTitle = withReveal(
  styled.h2`
    color: #051937;
  `,
  <Fade top />
);

export const ProjectDesc = withReveal(
  styled.p`
    margin-top: 2rem;
    max-width: 80%;
    font-size: 1.6rem;

    @media ${device.tablet} {
      max-width: 100%;
    }
  `,
  <Fade left />
);

export const BtnContainer = withReveal(
  styled.div`
    display: flex;
    margin-top: 2rem;
    gap: 1rem;

    @media ${device.tablet} {
      flex-direction: column;
      align-items: center;
    }

    @media ${device.mobileM} {
      margin-top: 1rem;
    }

    @media ${device.mobileS} {
      margin-top: 0.5rem;
    }
  `,
  <Fade right />
);

export const SourceCodeBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #051937;
  color: #fff;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #051937;
    border: 1px solid #051937;
  }

  @media ${device.tablet} {
    margin-top: 1rem;
    width: 100%;
  }
`;

export const LiveViewBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border: 1px solid #051937;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #051937;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #051937;
    color: #fff;
    border: 1px solid #051937;
  }

  @media ${device.tablet} {
    margin-top: 1rem;
    width: 100%;
  }
`;

export const ProjectImgContainer = withReveal(
  styled.div`
    grid-area: b;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 2rem 5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }

    @media ${device.tablet} {
      margin-top: 0;
      margin-bottom: 0;
      padding: 0;
    }
  `,
  <Fade bottom />
);

export const ProjectImg = styled.img`
  max-width: 100%;
  border-radius: 2rem;
  height: auto;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media ${device.tablet} {
    max-width: 100%;
    height: auto;
    width: 100%;
  }
`;
