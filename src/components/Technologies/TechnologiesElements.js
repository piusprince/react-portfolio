import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";
import { device } from "../../breakpoints";

import {
  DiReact,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiVisualstudio,
  DiGithubBadge,
  DiGit,
} from "react-icons/di";

export const TechnologiesWrapper = styled.section`
  margin-top: 5rem;
  padding: 2rem 5rem;
`;

export const Title = withReveal(
  styled.h2`
    font-size: 3.125rem;
    text-align: center;
    margin-bottom: 5rem;
    color: #051937;

    @media ${device.tablet} {
      text-align: left;
    }
  `,
  <Fade bottom />
);

export const Text = withReveal(
  styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 5rem;
    color: #051937;

    @media ${device.tablet} {
      text-align: left;
    }
  `,
  <Fade bottom />
);

export const DevIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  svg {
    height: 10rem;
    width: 10rem;
  }
`;

export const ReactIcon = styled(DiReact)`
  color: #61dafb;
`;
export const JavascriptIcon = styled(DiJavascript)`
  color: #f7df1e;
`;
export const MongoIcon = styled(DiMongodb)`
  color: #0e9a6c;
`;
export const NodeIcon = styled(DiNodejs)`
  color: #0e9a6c;
`;
export const VsCodeIcon = styled(DiVisualstudio)`
  color: #22a4f1;
`;

export const GithubIcon = styled(DiGithubBadge)`
  color: #051937;
`;

export const GitIcon = styled(DiGit)`
  color: #051937;
`;
