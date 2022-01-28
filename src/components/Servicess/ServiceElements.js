import styled from "styled-components";
import Fade from "react-reveal/Fade";
import withReveal from "react-reveal/withReveal";
import { device } from "../../breakpoints";

export const ServiceWrapper = styled.section`
  margin: 5rem;
`;

export const ServiceHeading = withReveal(
  styled.h1`
    font-size: 3.125rem;
    text-align: center;
    margin-bottom: 5rem;
    color: #051937;
  `,
  <Fade bottom />
);

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 20rem);
  gap: 5rem;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 2fr;
    gap: 5rem;
  }

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
  }
`;

export const Service1 = withReveal(
  styled.div`
    padding: 5rem 9rem;
    border-radius: 1.5rem;
    background-image: linear-gradient(
      to right bottom,
      #d1eeeb,
      #bef6e4,
      rgba(0, 0, 0, 0.12)
    );
    position: relative;
    box-shadow: 0.2rem 0.25rem rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }

    @media ${device.tablet} {
      padding: 5rem 3rem 3rem 4rem;
    }
  `,
  <Fade left />
);

export const ServiceLogo1 = styled.div`
  color: #051937;
  font-size: 5rem;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

export const Service2 = withReveal(
  styled.div`
    padding: 5rem 9rem;
    border-radius: 1.5rem;
    background-image: linear-gradient(
      to left bottom,
      #d1eeeb,
      #bef6e4,
      rgba(0, 0, 0, 0.12)
    );
    position: relative;
    box-shadow: 0.2rem 0.25rem rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }

    @media ${device.tablet} {
      padding: 5rem 3rem 3rem 4rem;
    }
  `,
  <Fade right />
);

export const ServiceLogo2 = styled.div`
  color: #051937;
  font-size: 5rem;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

export const Service3 = withReveal(
  styled.div`
    /* padding: 7rem; */
    padding: 5rem 9rem;
    border-radius: 1.5rem;
    background-image: linear-gradient(
      to right top,
      #d1eeeb,
      #bef6e4,
      rgba(0, 0, 0, 0.12)
    );
    position: relative;
    box-shadow: 0.2rem 0.25rem rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }

    @media ${device.tablet} {
      padding: 5rem 3rem 3rem 4rem;
    }
  `,
  <Fade left />
);

export const ServiceLogo3 = styled.div`
  color: #051937;
  font-size: 5rem;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

export const Service4 = withReveal(
  styled.div`
    /* padding: 7rem; */
    padding: 5rem 9rem;
    border-radius: 1.5rem;
    background-image: linear-gradient(
      to left top,
      #d1eeeb,
      #bef6e4,
      rgba(0, 0, 0, 0.12)
    );
    position: relative;
    box-shadow: 0.2rem 0.25rem rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }

    @media ${device.tablet} {
      padding: 5rem 3rem 3rem 4rem;
    }
  `,
  <Fade right />
);

export const ServiceLogo4 = styled.div`
  color: #051937;
  font-size: 5rem;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

export const ServiceTitle = styled.h1`
  font-size: 2rem;
  color: #051937;
  margin-bottom: 2rem;
`;

export const ServiceMessage = styled.p`
  font-size: 1.6rem;
  color: #051937;

  @media ${device.mobileL} {
  }
`;
