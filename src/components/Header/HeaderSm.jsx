import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail, IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

const HeaderSm = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    return (
        <header className="w-full border-b border-lite-gray/20 h-16 flex lg:hidden items-center sticky top-0 z-50 bg-main-dark-bg">
            <div className="h-full w-full flex justify-between items-center px-4 relative">
                <h1 className="text-pri-blue font-bold text-lg">Chiemezie</h1>

                <div>
                    <button 
                        className="border border-white-shade/30 p-1.5 rounded"
                        onClick={() => setIsMobileMenuVisible(prev => !prev)}
                    > 
                        {
                            isMobileMenuVisible ? 
                            <IoMdClose className="text-white/70 text-lg" /> : <LuMenu className="text-white/70 text-lg" />
                        }
                    </button>

                    {
                        isMobileMenuVisible &&
                        <nav 
                            className="absolute left-0 top-full px-4 flex flex-col gap-8 justify-center items-center bg-dark-bg w-full max-w-[15rem] h-[calc(100vh-4rem)] py-12 border-r border-white-shade/5 shadow-lg"
                        >
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-white capitalize hover:text-pri-blue duration-100">about</a></li>
                                <li><a href="#" className="text-white capitalize hover:text-pri-blue duration-100">contact</a></li>
                                <li><a href="#" className="text-white capitalize hover:text-pri-blue duration-100">contact</a></li>
                            </ul>

                            <div className="flex gap-8">
                                <a href="https://github.com/Chiemezie-Uchenwoke" target="_blank"> 
                                    <FaGithub className="text-lite-gray/80 text-xl hover:text-pri-blue duration-100" /> 
                                </a>

                                <a href="https://www.linkedin.com/in/chiemezieuche/" target="_blank"> 
                                    <FaLinkedin className="text-lite-gray/80 text-xl hover:text-pri-blue duration-100" /> 
                                </a>

                                <a href="mailto:uchenwoke.chiemezie@gmail.com" target="_blank"> 
                                    <IoMdMail className="text-lite-gray/80 text-xl hover:text-pri-blue duration-100" /> 
                                </a>
                            </div>
                        </nav>
                    }
                </div>
            </div>
        </header>
    )
}

export default HeaderSm;