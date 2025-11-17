const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 w-full py-12 bg-dark-lite">
            <div className="container flex flex-col gap-3 items-center">
                <a 
                    href="https://www.linkedin.com/in/chiemezieuche/"
                    className="text-pri-blue/70 hover:text-pri-blue duration-200 text-sm lg:text-base"
                    target="_blank"
                >
                    Chiemezie Uchenwoke
                </a>

                <p className="text-white-shade/60 capitalize text-sm lg:text-base">
                    © all rights reserved {currentYear}
                </p>
            </div>
        </footer>
    )
}

export default Footer;