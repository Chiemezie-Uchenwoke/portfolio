import chiemeziePicture from "../../assets/chiemezie-uche.png";

const Hero = () => {
    return (
        <section className="w-full flex flex-col gap-6 lg:gap-8 items-center pt-12 pb-4 ">
            <div className="border-3 md:border-4 border-pri-blue w-48 h-48 rounded-full overflow-hidden bg-white-shade/10">
                <img 
                    src={chiemeziePicture} 
                    alt="Chiemezie's picture" 
                    className="w-full h-full object-cover relative top-4"
                />
            </div>

            <h2 
                className="text-white-shade capitalize font-extrabold text-2xl sm:text-3xl lg:text-5xl tracking-wide"
            >
                Chiemezie Uchenwoke
            </h2>

            <p className="text-lite-gray/90 w-[90%] max-w-[39rem] lg:max-w-[47rem] text-center text-sm sm:text-base lg:text-[1.25rem] leading-6 sm:leading-7 lg:leading-8 font-medium">
                Fullstack Developer skilled in building modern & responsive web solutions that delivers value and enhance user experience. I help businesses and organizations bring their ideas to life through innovative design and development.
            </p>

            <div className="px-4 w-full flex flex-col min-[450px]:flex-row min-[450px]:justify-center gap-4 sm:gap-6 mt-2">
                <a 
                    href="#"
                    className="bg-pri-blue text-white-shade py-3 lg:py-3.5 px-10 rounded-md font-semibold capitalize flex gap-2 items-center justify-center w-full text-center min-[450px]:w-fit hover:scale-105 duration-300 transition ease-in-out hover:bg-blue-600/90"
                >
                    Download Cv
                </a>

                <a 
                    href="#"
                    className="border border-pri-blue text-pri-blue rounded-md font-semibold capitalize inline-block w-full text-center py-3 lg:py-3.5 px-10 min-[450px]:w-fit transition hover:bg-pri-blue hover:text-white-shade duration-300"
                >
                    view my work
                </a>
            </div>
        </section>
    )
}

export default Hero;