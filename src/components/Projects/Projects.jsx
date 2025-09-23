import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projectsData";

const Projects = () => {
    return (
        <section 
            className="w-full py-16" 
            style={{
                backgroundImage: "linear-gradient(to bottom, #0a0a0a, #111827)",
            }}
        >
            <div className="container flex flex-col items-center gap-10 md:gap-12">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-white-shade capitalize font-extrabold text-xl sm:text-3xl lg:text-4xl tracking-wide">featured projects</h2>

                    <p className="text-lite-gray/80 text-sm sm:text-base lg:text-xl text-center">
                        A showcase of my recent work and creative solutions
                    </p>
                </div>

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