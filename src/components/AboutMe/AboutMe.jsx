import myPic from "../../assets/chiemezie-uche.png";
import { CiUser } from "react-icons/ci";
import BackendSkillsItem from "./BackendSkillItem";
import backendSkillsData from "../../data/backendSkillsData";

const AboutMe = () => {
    return (
        <div 
            className="container flex flex-col md:flex-row gap-8 mt-8 min-h-[calc(75vh-4rem)]"
        >
            {/* Sidebar Card */}
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
                    Fullstack Developer building production-ready applications that solve real business problems.
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

            {/* Main Content */}
            <div className="w-full md:w-[calc(100%-17rem)] h-auto overflow-auto flex flex-col gap-6 border border-white-shade/15 rounded-lg py-6 px-4 lg:px-6">
                <h2 className="capitalize text-white-shade font-bold sm:text-lg lg:text-xl">about me</h2>
                
                <div className="text-white-shade/60 text-sm min-[900px]:text-base flex flex-col gap-5">
                    {/* Who I Am */}
                    <p className="leading-7">
                        I'm Chiemezie Uchenwoke, a <span className="text-white-shade font-semibold">Fullstack Developer</span> who builds scalable and user-focused web applications that people actually use. I design and develop complete solutions from user interface to database, handling authentication, APIs, and deployment.
                    </p>

                    {/* Recent Achievement */}
                    <div className="bg-pri-blue/10 border border-pri-blue/30 rounded-lg p-4">
                        <p className="text-white-shade/80 leading-7">
                            <span className="text-pri-blue font-semibold">Recent Project:</span> Built and delivered <span className="font-semibold">MekRecords</span>, a complete inventory management system currently serving a retail business. The system replaced manual paper records with real-time digital tracking for sales, inventory, and reporting.
                        </p>
                    </div>

                    {/* What I Do */}
                    <div>
                        <h3 className="text-white-shade font-semibold mb-3">What I Do:</h3>
                        <p className="leading-7">
                            I build complete web solutions focusing on four key areas:
                        </p>
                        <ul className="list-inside flex flex-col gap-2 mt-3">
                            {backendSkillsData.map((skill) => (
                                <BackendSkillsItem 
                                    key={skill.id}
                                    {...skill}
                                />
                            ))}
                        </ul>
                    </div>

                    {/* My Approach */}
                    <div>
                        <h3 className="text-white-shade font-semibold mb-3">My Approach:</h3>
                        <div className="space-y-3">
                            <p className="leading-7">
                                <span className="text-white-shade">Security First:</span> I implement proper authentication (JWT with refresh tokens), role-based access control, and encrypted password storage in every 
                                project requiring user management.
                            </p>
                            <p className="leading-7">
                                <span className="text-white-shade">User-Centered Design:</span> I build interfaces that work 
                                on any device, with clear navigation, and responsive layouts.
                            </p>
                            <p className="leading-7">
                                <span className="text-white-shade">Real-World Solutions:</span> I focus on creating features 
                                that solve actual business problems, not just showcasing technical skills.
                            </p>
                        </div>
                    </div>

                    {/* Teaching Experience */}
                    <div>
                        <h3 className="text-white-shade font-semibold mb-3">Beyond Coding:</h3>
                        <p className="leading-7">
                            I'm also a <span className="text-white-shade">technical instructor</span>. I teach fullstack development at Turing Tech LLC, where I've trained over 50 students across multiple cohorts. Teaching has made me better at explaining complex concepts in simple terms which helps when working with clients or team members.
                        </p>
                    </div>

                    {/* Currently Learning */}
                    <p className="leading-7">
                        I'm actively learning automated testing (Jest), containerization (Docker), and cloud infrastructure (AWS) to further strengthen my deployment and DevOps capabilities.
                    </p>

                    {/* Goal */}
                    <p className="leading-7">
                        I'm seeking opportunities to work on challenging projects with collaborative teams where I can 
                        contribute my fullstack expertise while continuing to grow as a developer.
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