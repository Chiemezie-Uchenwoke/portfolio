const SectionIntro = ({heading, subtitle}) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <h2 className="text-white-shade capitalize font-extrabold text-xl sm:text-3xl lg:text-4xl tracking-wide">
                {heading}
            </h2>

            <p className="text-lite-gray/80 text-sm sm:text-base lg:text-xl text-center">
                {subtitle}
            </p>
        </div>
    )
}

export default SectionIntro;