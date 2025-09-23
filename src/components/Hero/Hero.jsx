import chiemeziePicture from "../../assets/chiemezie-uche.png";

const Hero = () => {
    return (
        <section>
            <div className="">
                <img src={chiemeziePicture} alt="Chiemezie's picture" />
            </div>

            <h2>Chiemezie Uchenwoke</h2>

            <p>
                I am a result driven Fullstack Developer skilled in building modern, responsive and user-centric web solutions that delivers value and enhance user experience. I help businesses and organizations bring their ideas to life through innovative design and development.
            </p>

            <div>
                <a href="#">my resume</a>
                <a href="#">view my work</a>
            </div>
        </section>
    )
}

export default Hero;