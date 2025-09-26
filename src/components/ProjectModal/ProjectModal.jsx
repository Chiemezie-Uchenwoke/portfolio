const ProjectModal = ({title, description, stack, features}) => {
    return (
        <div className="">
            <div>
                <h2>
                    {title}
                </h2>

                <p>
                    {description}
                </p>

                <div>
                    <h3>Tech Stack</h3>
                    <p>
                        {
                            stack.map((s, i) => {
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
                            features.map((f, i) => {
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