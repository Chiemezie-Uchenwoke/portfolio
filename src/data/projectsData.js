import spendwise from "../assets/spendwise.png";
import mekrecords from "../assets/mekrecords.png";
import gozyResources from "../assets/gozy-resources.png";
import sillageLab from "../assets/The_Sillage_Lab.png";
import visionedge from "../assets/visionedge.png";
import taskflow from "../assets/taskflow.png";

const projectsData = [
    {
        id: 1,
        imgUrl: mekrecords,
        imgAltText: "MekRecords Inventory Management System",
        title: "MekRecords",
        description: "A complete inventory and sales management system for a retail business, replacing manual paper records with real-time digital tracking.",
        tools: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        liveUrl: "",
        codeUrl: "",
        isLive: false,
        features: [
            "Multi-item transaction system with batch tracking and profit calculation",
            "Role-based access control (Admin/Staff) with JWT authentication",
            "Real-time sales dashboard with MongoDB aggregation pipelines",
            "Automated PDF receipt generation for thermal printers",
            "CSV/PDF report exports with date range filtering",
            "Responsive mobile-first design with dark mode support"
        ], 
        note: "Private Client Project",
        videoUrl: "https://res.cloudinary.com/dmx1ew545/video/upload/v1776341805/Mekrecords_kuqpfr.mp4"
    },
    {
        id: 2,
        imgUrl: gozyResources, 
        imgAltText: "GozyResources Inventory Management System",
        title: "GozyResources",
        description: "A production inventory and sales management system for a retail business. Handles multi-branch operations, batch stock tracking and partial payment management.",
        tools: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        liveUrl: "",
        codeUrl: "",
        isLive: false,
        features: [
            "Batch inventory tracking with supplier name, product colour and stock levels",
            "Partial payment tracking with outstanding balance visibility and payment history",
            "Multi-branch sales recording across Head Office and Branch Office",
            "Role-based access control (Admin/Staff) with JWT authentication",
            "Thermal receipt generation showing amount paid and balance due",
            "CSV/PDF report exports with payment status columns",
            "Dashboard with real-time sales, profit and outstanding balance overview"
        ],
        note: "Private Client Project",
        videoUrl: "https://res.cloudinary.com/dmx1ew545/video/upload/v1776341810/Gozy_Resources_etkbl2.mp4"
    },
    {
        id: 3,
        imgUrl: sillageLab, 
        imgAltText: "The Sillage Lab - Luxury Experiential Perfume Bar Website",
        title: "The Sillage Lab",
        description: "The Sillage Lab is Arizona's first luxury mobile Perfume Bar offering bespoke fragrance experiences for Weddings, Parties, and Curated Events.",
        tools: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Web3Forms",
            "Vercel"
        ],
        liveUrl: "https://www.thesillagelab.co",
        codeUrl: "",
        isLive: true,
        features: [
            "Six fully responsive pages with mobile-first design approach",
            "Cinematic hero carousel with smooth Framer Motion animations",
            "Inquiry form with Web3Forms integration delivering submissions directly to client inbox",
            "SEO optimised with metadata, Open Graph tags and sitemap submission",
            "Google Analytics integration for visitor tracking and insights",
        ]
    },
    {
        id: 4,
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
        id: 5,
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