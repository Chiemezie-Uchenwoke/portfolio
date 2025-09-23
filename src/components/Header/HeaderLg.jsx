import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const HeaderLg = () => {
    return (
        <header className="">
            <div>
                <h1>Chiemezie</h1>

                <nav>
                    <a href="#">projects</a>
                    <a href="#">contact</a>
                </nav>

                <div>
                    <a href="#"> <FaGithub /> </a>
                    <a href="#"> <FaLinkedin /> </a>
                    <a href="#"> <IoMdMail /> </a>
                </div>
            </div>
        </header>
    )
}

export default HeaderLg;