import { IoMdClose } from "react-icons/io";

const ProjectModal = ({project, onClose}) => {
    if (!project) return null;

    const {title, description, tools, features} = project;

    return (
        <div className="fixed top-0 left-0 z-[70] bg-dark-bg/80 flex justify-center items-center w-full h-screen shadow-2xl shadow-white-shade/10 backdrop-blur-sm">
            <div className="bg-main-dark-bg w-[90%] max-w-[40rem] h-[75%] overflow-y-auto relative z-[75] rounded-lg py-8 px-6 lg:px-8 border border-white-shade/10 shadow-lg flex flex-col gap-6">
                <button 
                    onClick={onClose}
                    className="border border-white/20 hover:border-white/40 w-8 h-8 rounded-full flex justify-center items-center absolute right-4 top-3 cursor-pointer text-white-shade/40 hover:text-white-shade/70 duration-200"
                >
                    <IoMdClose className="text-lg" />
                </button>

                <h2 className="text-white font-bold capitalize text-lg lg:text-xl ">
                    {title}
                </h2>

                <p className="text-white-shade/60 text-sm lg:text-base">
                    {description}
                </p>

                <div className="flex flex-col gap-4">
                    <h3 className="text-base lg:text-lg text-white-shade font-medium">Tech Stack</h3>
                    <p className="flex gap-4 flex-wrap">
                        {
                            tools.map((s, i) => {
                                return (
                                    <span key={i} className="bg-white-shade/60 text-main-dark-bg whitespace-nowrap py-1 px-3 rounded-xl font-medium text-xs">
                                        {s}
                                    </span>
                                );
                            })
                        }
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-base lg:text-lg text-white-shade font-medium">Key Features</h3>
                    <ul className="flex flex-col gap-3">

                        {
                            features.map((f, i) => {
                                return (
                                    <li key={i} className="text-white-shade/60 text-sm lg:text-base list-disc list-outside">
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