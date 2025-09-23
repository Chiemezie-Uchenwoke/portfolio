import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const HeaderLg = () => {
    return (
        <header className="w-full border-b border-lite-gray/20 h-16 hidden lg:flex items-center sticky top-0 z-50 bg-main-dark-bg">
            <div className="container h-full flex justify-between items-center">
                <h1 className="text-pri-blue font-bold text-2xl">Chiemezie</h1>

                <nav className="flex gap-8">
                    <a href="#" className="text-white capitalize hover:text-pri-blue duration-100">about</a>
                    <a href="#" className="text-white capitalize hover:text-pri-blue duration-100">contact</a>
                    <a href="#" className="text-white capitalize hover:text-pri-blue duration-100">contact</a>
                </nav>

                <div className="flex gap-4">
                    <a href="#"> <FaGithub className="text-lite-gray/80 text-xl hover:text-pri-blue duration-100" /> </a>
                    <a href="#"> <FaLinkedin className="text-lite-gray/80 text-xl hover:text-pri-blue duration-100" /> </a>
                    <a href="#"> <IoMdMail className="text-lite-gray/80 text-xl hover:text-pri-blue duration-100" /> </a>
                </div>
            </div>
        </header>
    )
}

export default HeaderLg;