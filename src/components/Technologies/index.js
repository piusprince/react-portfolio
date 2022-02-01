import React from "react";
import {
  TechnologiesWrapper,
  Title,
  Text,
  DevIcons,
  ReactIcon,
  JavascriptIcon,
  MongoIcon,
  NodeIcon,
  VsCodeIcon,
  GithubIcon,
  GitIcon,
} from "./TechnologiesElements";

const Technologies = () => {
  return (
    <TechnologiesWrapper>
      <Title>Technologies I work with</Title>
      <Text>
        Currently these are the techonolgy stacks I work with but I am open to
        learning new technologies
      </Text>
      <DevIcons>
        <ReactIcon>
          <h2>React</h2>
        </ReactIcon>
        <JavascriptIcon>
          <h2>Javascript</h2>
        </JavascriptIcon>
        <MongoIcon>
          <h2>MongoDB</h2>
        </MongoIcon>
        <NodeIcon>
          <h2>NodeJS</h2>
        </NodeIcon>
        <VsCodeIcon>
          <h2>VS Code</h2>
        </VsCodeIcon>
        <GithubIcon>
          <h2>Github</h2>
        </GithubIcon>
        <GitIcon>
          <h2>Git</h2>
        </GitIcon>
      </DevIcons>
    </TechnologiesWrapper>
  );
};

export default Technologies;
