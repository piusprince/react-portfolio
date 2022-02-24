import styled from "styled-components";
import Fade from "react-reveal/Fade";
// import Bounce from "react-reveal/Bounce";
import withReveal from "react-reveal/withReveal";
import { device } from "../../breakpoints";

export const AboutPageWrapper = styled.section`
  margin: 5rem;
`;

export const Title = withReveal(
  styled.h1`
    font-size: 3.25rem;
    color: #051937;
    text-align: center;
    margin-bottom: 5rem;

    @media ${device.tablet} {
      text-align: left;
    }
  `,
  <Fade bottom />
);

export const Text = withReveal(
  styled.p`
    font-size: 1.6rem;
    margin-bottom: 5rem;
    color: #051937;
  `,
  <Fade bottom />
);

export const GamesTitle = withReveal(
  styled.h1`
    font-size: 3.25rem;
    color: #051937;
    text-align: center;
    margin-bottom: 5rem;

    @media ${device.tablet} {
      text-align: left;
    }
  `,
  <Fade bottom />
);

export const Game = withReveal(
  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    margin-bottom: 5rem;

    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `,
  <Fade bottom />
);

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 25rem;
  width: 30rem;
  border-radius: 1.5rem;
  overflow: hidden;
  margin-top: 2rem;

  background-image: linear-gradient(
    to right bottom,
    #d1eeeb,
    #bef6e4,
    rgba(0, 0, 0, 0.12)
  );
  gap: 4rem;

  &:hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
  }
`;

export const CardImg = styled.img`
  background-position: cover;
`;

export const CardTitle = styled.h1`
  font-size: 1.6rem;
  color: #051937;
  text-align: center;
`;

export const NovelsTitle = styled(GamesTitle)`
  margin-top: 10rem;
`;

export const Novel = styled(Game)``;
