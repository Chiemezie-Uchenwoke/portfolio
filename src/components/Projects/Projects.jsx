import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projectsData";
import SectionIntro from "../SectionIntro/SectionIntro";

const Projects = () => {
    return (
        <section 
            className="w-full py-16" 
            style={{
                backgroundImage: "linear-gradient(to bottom, #0a0a0a, #111827)",
            }}
            id="projects"
        >
            <div className="container flex flex-col items-center gap-10 md:gap-12">
                <SectionIntro 
                    heading="featured projects"
                    subtitle="A showcase of my recent work and creative solutions"
                />

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-auto">
                    {
                        projectsData.map(d => {
                            return (
                                <ProjectCard 
                                    key={d.id}
                                    {...d}
                                />
                            )        
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;