import React from "react";
import { projects } from "./projects";

import {
  WorkWrapper,
  WorkTitle,
  ProjectsContainer,
  ProjectTextContainer,
  ProjectTitle,
  ProjectDesc,
  BtnContainer,
  SourceCodeBtn,
  LiveViewBtn,
  ProjectImgContainer,
  ProjectImg,
} from "./WorkElements";
import { FaGithub } from "react-icons/fa";
import { GrLaunch } from "react-icons/gr";

const Work = () => {
  return (
    <WorkWrapper>
      <WorkTitle>Projects</WorkTitle>
      {projects.map((project) => (
        <ProjectsContainer key={project.id}>
          <ProjectTextContainer>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDesc>{project.desc}</ProjectDesc>
            <BtnContainer>
              <SourceCodeBtn>
                <FaGithub style={{ marginRight: 5 }} />
                Source code
              </SourceCodeBtn>
              <LiveViewBtn>
                <GrLaunch style={{ marginRight: 5 }} />
                View project
              </LiveViewBtn>
            </BtnContainer>
          </ProjectTextContainer>
          <ProjectImgContainer>
            <ProjectImg src={project.img} alt="Project image" />
          </ProjectImgContainer>
        </ProjectsContainer>
      ))}
    </WorkWrapper>
  );
};

export default Work;
