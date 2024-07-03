import SectionContainer from "../../layout-containers/section-container/SectionContainer";
import ProjectsBottomContainer from "./projects-bottom-container/ProjectsBottomContainer";
import ProjectsTopContainer from "./projects-top-container/ProjectsTopContainer";

export default function Projects() {
    return (
        <SectionContainer id={'projects'}>
            <ProjectsTopContainer />
            <ProjectsBottomContainer />
        </SectionContainer>
    )
}