import React from "react";
import Work from "../../components/Work";
import { projects } from "../../components/Work/projects";

const ProjectsPage = () => {
  return <Work projects={projects} />;
};

export default ProjectsPage;
