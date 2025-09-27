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
        isLive: false,
        features: [
            "User authentication",
            "Add, edit, delete transactions",
            "filter transactions by date and category",
            "Secure backend APIs with Node and Express",
            "Responsive UI using React and Tailwind CSS",
            "File uploads using Multer",
            "MongoDB database for persistence"
        ]
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
        isLive: true,
        features: [
            "Dynamic Question Loading: Questions and answers are dynamically updated using JavaScript.",
            "Responsive Design: Built with modern CSS techniques to ensure a great user experience on all devices."
        ]

    },
    {
        id: 3,
        imgUrl: maxstores,
        imgAltText: "Max-Stores Ecommerce App Image",
        title: "Max-Stores",
        description: "Max-Stores is a modern e-commerce web app built with React, featuring dynamic product listings, a shopping cart, and user authentication with Firebase.",
        tools: ["React", "CSS", "Firebase"],
        liveUrl: "https://max-stores.vercel.app/",
        codeUrl: "https://github.com/Chiemezie-Uchenwoke/max-stores",
        isLive: true,
        features: [
            "Product Display: View a list of available products with details such as name and price",
            "Add to Cart: Users can seamlessly add products to their cart.",
            "Responsive Design: The platform adapts to various devices, ensuring a smooth shopping experience.",
            "Dynamic Updates: Leveraging React's state management to dynamically update the cart.",
            "User authentication with Firebase"
        ]
    },
];

export default projectsData;