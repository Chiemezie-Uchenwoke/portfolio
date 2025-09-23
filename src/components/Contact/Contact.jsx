import SectionIntro from "../SectionIntro/SectionIntro";
import { BsCursorFill } from "react-icons/bs";

const Contact = () => {
    return (
        <section className="mt-20 container flex flex-col gap-12">
            <SectionIntro 
                heading="get in touch"
                subtitle="Ready to start your next project? Let's work together!"
            />
            
            <form 
                className="w-full max-w-[35rem] lg:max-w-[52rem] mx-auto bg-dark-bg border border-white-shade/10 rounded-lg py-8 px-4 lg:px-6 flex flex-col gap-8"
            >
                <div className="w-full flex flex-col sm:flex-row gap-8">
                    <div className="flex flex-col gap-2 w-full sm:w-1/2">
                        <label 
                            htmlFor="fullname"
                            className="contact-form-label"
                        >
                            Name
                        </label>

                        <input 
                            type="text" 
                            placeholder="your name" 
                            className="contact-form-input"
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-full sm:w-1/2">
                        <label htmlFor="email" className="contact-form-label">Email</label>
                        <input 
                            type="email" 
                            placeholder="example@email.com"
                            className="email-input" 
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="contact-form-label">subject</label>
                    <input type="text" placeholder="project inquiry" className="contact-form-input" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="contact-form-label">message</label>
                    <textarea 
                        name="message" 
                        placeholder="Tell me about your project..." 
                        className="contact-textarea"
                    ></textarea>
                </div>

                <button 
                    className="flex items-center gap-2 bg-pri-blue py-3 justify-center rounded-lg text-white-shade font-semibold tracking-wide lg:text-lg hover:bg-blue-600/80 duration-200 cursor-pointer"
                >
                    <BsCursorFill />
                    Send Message
                </button>

            </form>
            
        </section>
    )
}

export default Contact;