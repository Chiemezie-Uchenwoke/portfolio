import HeaderLg from "../components/Header/HeaderLg";
import HeaderSm from "../components/Header/HeaderSm";
import Hero from "../components/Hero/Hero";
import MyServices from "../components/MyServices/MyServices";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <HeaderLg />
            <HeaderSm />
            <Hero />
            <MyServices />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage;