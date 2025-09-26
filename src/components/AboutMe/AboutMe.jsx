import myPic from "../../assets/chiemezie-uche.png";
import { CiUser } from "react-icons/ci";

const AboutMe = () => {
    return (
        <div className="h-[calc(100vh-4rem)] ">
            <div 
                className="container flex flex-col md:flex-row gap-8 mt-8"
            >
                <div className="border border-white-shade/15 rounded-lg w-full md:w-[20rem] flex flex-col gap-3.5 py-6 px-4">
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
                        className="text-white-shade bg-pri-blue inline-block w-full py-2 px-10 text-center capitalize rounded-lg hover:bg-pri-blue/80 duration-300"
                    >
                        get in touch
                    </a>
                </div>

                <div className="w-full md:w-[calc(100%-20rem)] h-auto overflow-auto flex flex-col gap-6 border border-white-shade/15 py-6 px-4 rounded-lg">
                    <h2 className="capitalize text-white-shade font-bold sm:text-lg lg:text-xl">about me</h2>

                    <div className="text-white-shade/60 text-sm min-[900px]:text-base flex flex-col gap-4">
                        <p>
                            I am a Fullstack Developer skilled in building responsive, user-centered web applications using technologies like Node.js, Express, React, and Tailwind CSS. I have a solid foundation in frontend development and a growing expertise in backend systems, RESTful API design, authentication, and database management. My journey has been shaped by a commitment to continuous learning and a drive to create clean, functional, and visually engaging web solutions.


                        </p>

                        <p>
                            Currently I am deepening my backend expertise by working with both PostgreSQL and MongoDB, designing optimized database schemas, writing efficient SQL and NoSQL queries, and building secure, scalable API connections between frontend interfaces and backend services.
                        </p>

                        <p>
                            Beyond technical skills, I am deeply passionate about mentorship and knowledge-sharing. I believe in fostering collaborative environments and am committed to continuous growth, both as a developer and a professional.
                        </p>
                    </div>

                    <button className="border border-white-shade/20 bg-white-shade/50 my-3 py-3 rounded-lg font-semibold cursor-pointer hover:bg-white-shade/65 duration-300 active:scale-95">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;