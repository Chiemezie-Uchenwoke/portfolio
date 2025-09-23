import HeaderLg from "../components/Header/HeaderLg";
import HeaderSm from "../components/Header/HeaderSm";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
    return (
        <>
            <HeaderLg />
            <HeaderSm />
            <Hero />
            <Projects />
            <Contact />
        </>
    )
}

export default HomePage;