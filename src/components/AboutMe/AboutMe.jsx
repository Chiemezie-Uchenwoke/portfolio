import myPic from "../../assets/chiemezie-uche.png";
import { CiUser } from "react-icons/ci";
import BackendSkillsItem from "./BackendSkillItem";
import backendSkillsData from "../../data/backendSkillsData";

const AboutMe = () => {
    return (
        <div 
            className="container flex flex-col md:flex-row gap-8 mt-8 min-h-[calc(75vh-4rem)]"
        >
            <div className="border border-white-shade/15 rounded-lg w-full md:w-[17rem] flex flex-col items-center gap-3.5 py-6 px-4 h-fit">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-dark-gray/10">
                    <img 
                        src={myPic} 
                        alt="Chiemezie Uchenwoke's picture" 
                        className="w-full h-full object-cover relative top-4"
                    />
                </div>

                <h4 className="text-pri-blue/90 flex items-center gap-2 self-start">
                    <CiUser /> Chiemezie Uchenwoke
                </h4>

                   <p className="text-white-shade/60 text-sm">
                       I specialize in creating modern, responsive applications that deliver exceptional user experiences.
                   </p>

                <a 
                    href="mailto:uchenwoke.chiemezie@gmail.com?subject=Project%20Inquiry" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-shade bg-pri-blue inline-block w-full mt-2 py-2 px-10 text-center capitalize rounded-lg hover:bg-pri-blue/80 duration-300"
                >
                    get in touch
                </a>
            </div>

            <div className="w-full md:w-[calc(100%-17rem)] h-auto overflow-auto flex flex-col gap-6 border border-white-shade/15 rounded-lg py-6 px-4 lg:px-6">
                <h2 className="capitalize text-white-shade font-bold sm:text-lg lg:text-xl">about me</h2>
                <div className="text-white-shade/60 text-sm min-[900px]:text-base flex flex-col gap-5">
                    <p className="leading-7">
                        I am a Fullstack Web Developer skilled in building clean, responsive and user-centered web applications using technologies like React, Tailwind CSS, Node.js and Express. 
                    </p>

                    <p className="leading-7">
                        My journey into development has been shaped by consistent learning, curiosity, and a drive for excellence. I began with frontend development, building interfaces that focus on clarity, simplicity, and great user experience. Over time, I expanded into the backend, developing skills in:
                    </p>

                    <ul className="list-inside flex flex-col gap-2">
                        {
                            backendSkillsData.map((skill) => {
                                return (
                                    <BackendSkillsItem 
                                        key={skill.id}
                                        {...skill}
                                    />
                                )
                            })
                        }
                    </ul>

                    <p className="leading-7">
                        Right now, I'm deepening my expertise in backend engineering, working with MongoDB and PostgreSQL, optimizing schemas, writing queries, and building secure, maintainable APIs. I enjoy applying what I learn directly into projects and solving real world problems. 
                    </p>

                    <p className="leading-7">
                        Beyond technical skills, I am deeply passionate about mentorship and knowledge-sharing. I believe in fostering collaborative environments and am committed to continuous growth, both as a developer and a professional.
                    </p>

                    <p className="leading-7">
                        My goal is to build meaningful and robust products, grow continously and contribute positively wherever i find myself.
                    </p>
                </div>

                <a 
                    className="border border-white-shade/30 bg-white-shade/20 text-white-shade my-3 py-3 rounded-lg font-semibold cursor-pointer hover:bg-white-shade/25 duration-300 active:scale-95 text-center"
                    href="/Chiemezie_Uchenwoke_CV.pdf"
                    download
                >
                    Download CV
                </a>
            </div>
        </div>
    )
}

export default AboutMe;