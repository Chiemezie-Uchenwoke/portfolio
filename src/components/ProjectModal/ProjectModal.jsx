const ProjectModal = ({project}) => {
    return (
        <div className="">
            <div>
                <h2>
                    {project.title}
                </h2>

                <p>
                    {project.description}
                </p>

                <div>
                    <h3>Tech Stack</h3>
                    <p>
                        {
                            project.stack.map((s, i) => {
                                return (
                                    <span key={i}>
                                        {s}
                                    </span>
                                );
                            })
                        }
                    </p>
                </div>

                <div>
                    <h3>Key Features</h3>
                    <ul>

                        {
                            project.features.map((f, i) => {
                                return (
                                    <li key={i}>
                                        {f}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;