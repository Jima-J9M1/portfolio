import { ProjectProps } from "../../../types";


export const projects: ProjectProps[] = [
    {
        id: 1,
        title: "Weather Forecast App",
        description: "A web application that provides real-time weather updates and forecasts for any location. Users can view current conditions, weekly forecasts, and severe weather alerts.",
        image: "weather-forecast-app.png",
        techStack: ["React", "Node.js", "Express", "OpenWeatherMap API"]
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description: "A comprehensive e-commerce platform enabling users to browse products, add them to their cart, and securely checkout. Includes admin panel for managing products, orders, and users.",
        image: "ecommerce-platform.png",
        techStack: ["Vue.js", "Laravel", "MySQL", "Stripe API"]
    },
    {
        id: 3,
        title: "Social Media Dashboard",
        description: "A dashboard for managing and monitoring social media accounts. Features include post scheduling, analytics, and multi-account support.",
        image: "social-media-dashboard.png",
        techStack: ["Angular", "Firebase", "Chart.js", "Twitter API"]
    },
    {
        id: 4,
        title: "Fitness Tracker",
        description: "A mobile app that helps users track their fitness activities, set goals, and monitor progress. Integrates with wearable devices for accurate data.",
        image: "fitness-tracker.png",
        techStack: ["React Native", "Redux", "Google Fit API", "SQLite"]
    },
    {
        id: 5,
        title: "Online Learning Platform",
        description: "An online learning platform that offers courses across various subjects. Features include video lectures, quizzes, discussion forums, and progress tracking.",
        image: "online-learning-platform.png",
        techStack: ["Next.js", "GraphQL", "PostgreSQL", "AWS"]
    },
    {
        id: 6,
        title: "Personal Finance Manager",
        description: "A web application for managing personal finances. Users can track expenses, create budgets, and generate financial reports.",
        image: "personal-finance-manager.png",
        techStack: ["Django", "React", "PostgreSQL", "Plaid API"]
    },
    {
        id: 7,
        title: "Recipe Sharing Community",
        description: "A platform where users can share and discover recipes. Features include user profiles, recipe ratings, and a search function.",
        image: "recipe-sharing-community.png",
        techStack: ["Ruby on Rails", "React", "MongoDB", "Cloudinary"]
    },
    {
        id: 8,
        title: "Travel Booking System",
        description: "A travel booking system that allows users to book flights, hotels, and rental cars. Includes features for itinerary management and user reviews.",
        image: "travel-booking-system.png",
        techStack: ["Spring Boot", "Thymeleaf", "MySQL", "Amadeus API"]
    },
    {
        id: 9,
        title: "Project Management Tool",
        description: "A project management tool designed to help teams collaborate efficiently. Features include task management, file sharing, and real-time notifications.",
        image: "project-management-tool.png",
        techStack: ["Node.js", "Express", "React", "Socket.io", "MongoDB"]
    },
    {
        id: 10,
        title: "Virtual Reality Museum",
        description: "An immersive virtual reality museum experience that allows users to explore exhibits from the comfort of their home. Includes interactive 3D models and audio guides.",
        image: "virtual-reality-museum.png",
        techStack: ["Unity", "C#", "Oculus SDK", "Photon"]
    }
];
