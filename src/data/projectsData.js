import spendwise from "../assets/spendwise.png";
import quizApp from "../assets/quiz.png";
import maxstores from "../assets/max-stores.jpg";

const projectsData = [
    {
        id: 1,
        imgUrl: spendwise,
        imgAltText: "SpendWise App Image",
        title: "SpendWise App",
        description: "SpendWise is a modern finance tracking web application that helps users manage their personal finances with ease.",
        tools: ["React", "Tailwind CSS", "Node.JS", "Express.JS", "MongoDB"],
        liveUrl: "#",
        codeUrl: "#",
        isLive: false
    },
    {
        id: 2,
        imgUrl: quizApp,
        imgAltText: "JavaScript Quiz App Image",
        title: "Interactive Quiz App",
        description: "An interactive Quiz App designed to provide an engaging experience for users by dynamically loading questions.",
        tools: ["JavaScript", "CSS", "HTML"],
        liveUrl: "https://quizlisphere.vercel.app/",
        codeUrl: "https://github.com/Chiemezie-Uchenwoke/quiz-app",
        isLive: true
    },
    {
        id: 3,
        imgUrl: maxstores,
        imgAltText: "Max-Stores Ecommerce App Image",
        title: "Max-Stores",
        description: "Max-Stores is a modern e-commerce web app built with React, featuring dynamic product listings, a shopping cart, and user authentication with Firebase.",
        tools: ["React", "Tailwind CSS", "Firebase"],
        liveUrl: "https://max-stores.vercel.app/",
        codeUrl: "https://github.com/Chiemezie-Uchenwoke/max-stores",
        isLive: true
    },
];

export default projectsData;