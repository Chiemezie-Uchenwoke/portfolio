import MyServicesCard from "./MyServicesCard";
import servicesData from "../../data/servicesData";
import SectionIntro from "../SectionIntro/SectionIntro";

const MyServices = () => {
    return (
        <section 
            className="w-full mt-20 py-18 flex flex-col items-center gap-10 md:gap-12 bg-dark-lite"
            /* style={{
                backgroundImage: "linear-gradient(to bottom, #0a0a0a, #111827)",
            }} */
        >
            <SectionIntro 
                heading="My Services"
                subtitle="What I can do for you"
            />

            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    servicesData.map(s => {
                        return (
                            <MyServicesCard 
                                key={s.id}
                                {...s}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MyServices;