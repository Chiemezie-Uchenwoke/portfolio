import SectionIntro from "../SectionIntro/SectionIntro";
import SkillsCard from "./SkillsCard";
import skillData from "../../data/skillsData";

const MySkills = () => {
    return (
        <section 
            className="w-full mt-20 flex flex-col items-center gap-10 md:gap-12 bg-main-dark-bg"
        >

            <SectionIntro 
                heading="technical skills"
                subtitle="Technologies and tools i work with"
            />

            <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {
                    skillData.map(d => {
                        return (
                            <SkillsCard 
                                key={d.id}
                                {...d}
                            />
                        );
                    })
                }
            </div>

        </section>
    )
}

export default MySkills;