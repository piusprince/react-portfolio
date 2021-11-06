import React from 'react'
import {projects} from './projects'

import {
    WorkWrapper,
    WorkTitle,
    ProjectsContainer,
    ProjectTextContainer,
    ProjectTitle,
    ProjectDesc,
    ProjectGithub,
    ProjectLiveLink,
    ProjectImgContainer,
    ProjectImg,
} from './WorkElements'

const Work = () => {

    

    return (
       <WorkWrapper>
           <WorkTitle>Projects</WorkTitle>
            {projects.map(project => (
                <ProjectsContainer key={project.id}>
                    <ProjectTextContainer>
                        <ProjectTitle>{project.name}</ProjectTitle>
                        <ProjectDesc>{project.desc}</ProjectDesc>
                    </ProjectTextContainer>
                    <ProjectImgContainer>
                        <ProjectImg src={project.img}/>
                    </ProjectImgContainer>
                </ProjectsContainer>
            ))}
       </WorkWrapper>
    )
}

export default Work
