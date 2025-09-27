import HeaderLg from "../components/Header/HeaderLg";
import HeaderSm from "../components/Header/HeaderSm";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

const AboutPage = () => {
    return (
        <>
            <HeaderLg isHomePage={false} />
            <HeaderSm isHomePage={false} />
            <AboutMe />
            <Footer />            
        </>
    )
}

export default AboutPage;