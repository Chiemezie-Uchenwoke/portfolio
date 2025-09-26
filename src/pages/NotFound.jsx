const NotFound = () => {
    return (
        <div className="w-full max-w-[35rem] py-8 px-4 mt-10 flex flex-col gap-6">
            <h1 className="font-bold text-white-shade text-xl sm:text-2xl lg:text-5xl">404 - Page Not Found</h1>
            <p className="text-white-shade/60">The page you are looking for does not exist.</p>
        </div>
    )
}

export default NotFound;