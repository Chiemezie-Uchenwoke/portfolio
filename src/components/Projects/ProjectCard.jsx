import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaGithub, FaHourglassHalf } from "react-icons/fa";

const ProjectCard = ({imgUrl, imgAltText, title, description, tools, liveUrl, codeUrl, isLive, onClick}) => {
    return (
        <div className="rounded-lg overflow-hidden h-full bg-dark-bg flex flex-col border border-white-shade/10 hover:border-pri-blue hover:scale-105 duration-200 ease-in-out cursor-pointer" onClick={onClick}>
            <div className="h-auto overflow-hidden">
                <img src={imgUrl} alt={imgAltText} className="w-full h-full max-w-full object-cover" />
            </div>

            <div className="px-4 lg:px-6 flex flex-col gap-4 py-6">
                <h3 className="text-white-shade font-bold text-lg tracking-wide capitalize">
                    {title}
                </h3>

                <p className="text-lite-gray/80 text-sm lg:text-base select-none">
                    {description}
                </p>

                <div className="flex gap-2 flex-wrap my-1">
                    {
                        tools.map((t, index) => {
                            return (
                                <span 
                                    key={index} 
                                    className="bg-blue-lite text-pri-blue text-xs py-1 px-3 whitespace-nowrap rounded-full capitalize"
                                > 
                                    {t} 
                                </span>
                            )
                        })
                    }
                </div>

                <div className="flex gap-6">
                    {
                        isLive ? 
                        <>
                            <a 
                                href={liveUrl}
                                className="text-pri-blue flex items-center gap-2 font-bold cursor-pointer hover:text-blue-500/80 group"
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                            > 
                                <LuSquareArrowOutUpRight className="text-pri-blue text-xl duration-200 group-hover:text-blue-500/80" /> 
                                Live 
                            </a>

                            <a 
                                href={codeUrl}
                                className="text-pri-blue flex items-center gap-2 font-bold cursor-pointer hover:text-blue-500/80 group"
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                            > 
                                <FaGithub className="text-pri-blue hover:text-blue-600 duration-200 group-hover:text-blue-500/80" /> 
                                code 
                            </a>
                        </> : 
                            <span className="text-pri-blue font-bold flex items-center gap-2"><FaHourglassHalf /> Coming Soon</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;