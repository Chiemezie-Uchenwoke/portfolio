import spendwise from "../assets/spendwise.png";
import quizApp from "../assets/quiz.png";
import stockifyImg from "../assets/Stockify.png";
import qr from "../assets/qr.png";
import visionedge from "../assets/visionedge.png";
import taskflow from "../assets/taskflow.png";

const projectsData = [
    {
        id: 1,
        imgUrl: stockifyImg,
        imgAltText: "Stockify App Image",
        title: "Stockify App",
        description: "Stockify is an inventory management & profit-tracking web app built for importers and retailers. It helps businesses manage batches, products, expenses, and sales.",
        tools: ["React", "Tailwind CSS", "Zustand", "Framer Motion", "ChartJS", "Node", "Express.JS", "MongoDB"],
        liveUrl: "",
        codeUrl: "https://github.com/Chiemezie-Uchenwoke/stockify-frontend",
        isLive: false,
        features: [
            "User authentication",
            "Password recovery",
            "Add import / retail batches",
            "Add products by batch",
            "Edit batches and products",
            "Filter batches and products",
            "Record sales",
            "View sales by batch",
            "Add expense batches (shipping, logistics, customs, etc.)",
            "View expenses by batch",
            "Light / dark theme",
            "And lots more."
        ]
    },
    {
        id: 2,
        imgUrl: spendwise,
        imgAltText: "SpendWise App Image",
        title: "SpendWise App",
        description: "SpendWise is a modern finance tracking web application that helps users manage their personal finances with ease.",
        tools: ["React", "Tailwind CSS", "Node.JS", "Express.JS", "MongoDB"],
        liveUrl: "https://spendwise-nu.vercel.app/",
        codeUrl: "https://github.com/Chiemezie-Uchenwoke/spendwise",
        isLive: true,
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
        id: 3,
        imgUrl: taskflow,
        imgAltText: "Taskflow Image",
        title: "Taskflow",
        description: "TaskFlow is a modern SaaS landing page and demo application built with React and Tailwind CSS. It showcases my ability to design and implement a responsive, professional frontend for a SaaS product.",
        tools: ["React", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://taskflow-saas-dev.vercel.app/",
        codeUrl: "https://github.com/Chiemezie-Uchenwoke/taskflow",
        isLive: true,
        features: [
            "Hero Section: Engaging introduction with clear call-to-action.",
            "Features Section: Highlights key product benefits.",
            "Pricing Section: Simple, transparent pricing plans.",
            "Testimonials Section: Social proof with user feedback.",
            "Responsive Design: Optimized for all devices.",
            "Animations: Smooth effects powered by Framer Motion."
        ]
    },
    {
        id: 4,
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
        id: 5,
        imgUrl: qr,
        imgAltText: "QR Code Generator Image",
        title: "QR Code Generator",
        description: "A simple yet powerful web application built with Node and Express. It allows users to generate QR codes for websites and phone numbers effortlessly.",
        tools: ["Node.JS", "Express.JS", "JavaScript", "CSS", "HTML"],
        liveUrl: "https://qr-code-generator-six-omega.vercel.app/",
        codeUrl: "https://github.com/Chiemezie-Uchenwoke/qrcodegenerator",
        isLive: true,
        features: [
            "Generate QR codes for URLs and phone numbers",
            "Download and save QR codes as images",
            "Clean and responsive user interface"
        ]
    },
    {
        id: 6,
        imgUrl: visionedge,
        imgAltText: "vision edge Image",
        title: "vision edge",
        description: "VisionEdge is a modern and responsive one-page corporate website built with Tailwind CSS and JavaScript.",
        tools: ["JavaScript", "Tailwind CSS", "HTML"],
        liveUrl: "https://vision-edge.vercel.app/",
        codeUrl: "https://github.com/Chiemezie-Uchenwoke/vision_edge",
        isLive: true,
        features: [
            "Responsive design: Optimized for desktops, tablets, and mobile devices",  
            "Built with Tailwind CSS: Utility-first framework for fast, modern UI development",  
            "Interactive user interaction"
        ]
    },
];

export default projectsData;