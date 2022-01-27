import styled from "styled-components";

export const WorkWrapper = styled.section`
  margin-top: 5rem;
  padding: 2rem 5rem;
`;

export const WorkTitle = styled.h2`
  text-align: center;
  font-size: 3.2rem;
  color: #051937;
  margin-bottom: 5rem;
`;

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
`;

export const ProjectTextContainer = styled.div`
  grid-area: a;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectTitle = styled.h2`
  color: #051937;
`;

export const ProjectDesc = styled.p`
  margin-top: 2rem;
  max-width: 80%;
  font-size: 1.6rem;
`;

export const ProjectImgContainer = styled.div`
  grid-area: b;
`;

export const ProjectImg = styled.img`
  max-width: 100%;
  border-radius: 2rem;
`;
