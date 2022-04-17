import React from "react";
import Work from "../../components/Work";
import { projects } from "../../components/Work/projects";
import styled from "styled-components";

const ProjectsPage = () => {
  return <Work projects={projects} />;
};

export default ProjectsPage;
