import SectionIntro from "../SectionIntro/SectionIntro";
import { BsCursorFill } from "react-icons/bs";
import FormNotification from "../FormNotification/FormNotification";
import { useState } from "react";

const Contact = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: ""
    });
    const [notificationData, setNotificationData] = useState({
        title: "",
        message: "",
        isSuccess: false,
        isError: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullname || !formData.email || !formData.subject || !formData.message){
            setNotificationData({
                title: "Error!",
                message: "Missing required fields",
                isSuccess: false,
                isError: true
            });

            setShowNotification(true);
            return;
        }

        setNotificationData({
            title: "Success!",
            message: "Message sent successfully.",
            isSuccess: true,
            isError: false
        });

        setShowNotification(true);
    }

    return (
        <section className="mt-20 container flex flex-col gap-12" id="contact">
            <SectionIntro 
                heading="get in touch"
                subtitle="Ready to start your next project? Let's work together!"
            />
            
            <form 
                className="w-full max-w-[35rem] lg:max-w-[52rem] mx-auto bg-dark-bg border border-white-shade/10 rounded-lg py-8 px-4 lg:px-6 flex flex-col gap-8"
                onSubmit={handleSubmit}
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
                            value={formData.fullname}
                            onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-full sm:w-1/2">
                        <label htmlFor="email" className="contact-form-label">Email</label>
                        <input 
                            type="email" 
                            placeholder="example@email.com"
                            className="email-input" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="contact-form-label">subject</label>
                    <input 
                        type="text" 
                        placeholder="project inquiry" 
                        className="contact-form-input" 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="contact-form-label">message</label>
                    <textarea 
                        name="message" 
                        placeholder="Tell me about your project..." 
                        className="contact-textarea"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    className="flex items-center gap-2 bg-pri-blue py-3 justify-center rounded-lg text-white-shade font-semibold tracking-wide lg:text-lg hover:bg-blue-600/80 duration-200 cursor-pointer active:scale-95"
                >
                    <BsCursorFill />
                    Send Message
                </button>

            </form>

            {
                showNotification &&
                <FormNotification 
                    {...notificationData}
                    onClose={() => setShowNotification(false)}
                />
            }
            
        </section>
    )
}

export default Contact;