import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const cardVariants = (index) => ({
    hidden: {
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 18,
            mass: 0.8,
        },
    },
})

export default function Projects() {
    const projects = [
        {
            title: "Creator Crest",
            image: "/assets/images/creatorcrest.png",
            demo: "https://www.creatorcrest.in/",
            github: "https://github.com/swapnova/creatorcrest",
            description: "Full-stack SaaS platform built with Next.js and Supabase enabling creators to manage brand deals end-to-end, with Razorpay payment integration processing live transactions. Features an AI-powered sponsorship automation system using Google Gemini API with a credit-based throttling system, multi-channel OAuth pipelines (Gmail API + Instagram Messaging API) with smart deduplication, and a Kanban-based deal pipeline with drag-and-drop stage management and real-time Supabase updates.",
            techStack: ["Next.js", "Supabase", "Razorpay", "Google Gemini", "Gmail API", "Instagram API", "Prisma"],
        },
        {
            title: "Autonomous AI-Powered Candidate Screener",
            image: "/assets/images/n8n.png",
            demo: "https://drive.google.com/file/d/1_8zudZ28jX0gsSg1Hw4YnS1LV3-d8NzE/view",
            github: null,
            description: "Designed and deployed an end-to-end AI recruitment workflow using n8n that automatically ingests candidate applications, extracts and analyzes resume content against role-specific job descriptions using OpenAI, and generates structured hiring recommendations. The system automates candidate scoring, skill matching, qualification extraction, and applicant tracking while synchronizing records to Notion and notifying candidates via email. Reduced manual resume screening effort by 80%+, shortened candidate evaluation time from 10-15 minutes to under 1 minute per application, and enabled recruiters to focus only on high-potential candidates through automated ranking and recommendation workflows.",
            techStack: ["n8n", "OpenAI", "Python", "Webhooks", "Google Drive API", "Notion API", "Gmail API", "Prompt Engineering", "Workflow Automation",],
        },
        {
            title: "PitchForgeAI",
            image: "/assets/images/pitchforge.png",
            demo: "https://drive.google.com/file/d/1h1mifqT1-1N1Ra9gKgppfN9FxW3zIdjp/view",
            github: "https://github.com/swapnilgarg7/PitchForgeAI",
            description: "Full-stack tool using Python (FastAPI) and Next.js that generates investor-ready pitch decks from raw startup ideas in seconds. Leverages Google Gemini AI to automate content creation and market analysis (TAM/SAM/SOM) with structured data extraction, and integrates Slides, Sheets, and Drive APIs to programmatically build presentations and update live data charts.",
            techStack: ["Python", "FastAPI", "Next.js", "Google Gemini", "Google Slides API", "Google Drive API"],
        },
        {
            title: "JirAutomate",
            image: "/assets/images/jirautomate.png",
            demo: "https://jirautomate.vercel.app/",
            github: "https://github.com/swapnilgarg7/JirAutomate",
            description: "Full-stack web app using Angular and C# (ASP.NET Web API) that extracts action items from meeting transcripts via Google Gemini API and creates Jira tickets automatically using the Jira Cloud REST API. Features JWT-based authentication, MongoDB for encrypted user data, a Dockerized deployment setup, and a Ticket Editing Dashboard with Assignee Mapping.",
            techStack: ["Angular", "C#", "ASP.NET", "Google Gemini", "Jira API", "MongoDB", "Docker", "JWT"],
        },
        {
            title: "SehatSaarthi",
            image: "/assets/images/sehatsaarthi.png",
            demo: "https://www.youtube.com/shorts/t-njDvslIyI",
            github: "https://github.com/swapnilgarg7/SehatSaarthi",
            description: "WhatsApp bot for rural health workers built with Python and Flask. Uses Meta WhatsApp Business API to configure webhooks for real-time bot communication and message handling, and integrates Gemini API for NLP, speech-to-text, and automated health report generation.",
            techStack: ["Python", "Flask", "Meta WhatsApp API", "Google Gemini", "NLP"],
        },
        {
            title: "ZenChat",
            image: "/assets/images/ZenChat.jpeg",
            demo: "https://www.youtube.com/watch?v=2pz5uiUzlmY",
            github: "https://github.com/swapnilgarg7/ZenChat",
            description: "An AI-powered mental health companion built with Flutter and Firebase, integrating OpenAI's GPT models to deliver empathetic, context-aware therapeutic conversations. The system detects emotional distress signals in real time and escalates to professional referrals when needed. Won 2nd place at CodeValds Hackathon.",
            techStack: ["Flutter", "Firebase", "OpenAI API"],
        },
        {
            title: "Breast Cancer Predictor",
            image: "/assets/images/BCP.png",
            demo: "https://github.com/swapnilgarg7/BreastCancerPredictor",
            github: "https://github.com/swapnilgarg7/BreastCancerPredictor",
            description: "A clinical decision-support tool applying a Random Forest Classifier (94.74% accuracy) trained on the UCI Breast Cancer dataset to predict malignancy from diagnostic features. Built with an intuitive Tkinter GUI designed for non-technical medical users.",
            techStack: ["Python", "scikit-learn", "Machine Learning", "Tkinter"],
        },
        {
            title: "Anti-Mewing Bot",
            image: "/assets/images/mewing.png",
            demo: "https://www.youtube.com/watch?v=bKvlZrEfbwQ",
            github: "https://github.com/swapnilgarg7/anti-mewing-bot",
            description: "A real-time computer vision bot that uses OpenCV facial landmark detection and pose estimation to identify mewing behaviour from a live webcam feed and trigger corrective prompts — a lightweight ML-powered wellness tool.",
            techStack: ["Python", "OpenCV", "Computer Vision"],
        },
        {
            title: "Roomie Connect",
            image: "/assets/images/roomie.png",
            demo: "https://roomie-connect.vercel.app/",
            github: "https://github.com/swapnilgarg7/RoomieConnect",
            description: "A full-stack roommate-matching platform with AI-powered compatibility ranking that scores listings based on lifestyle preferences. Uses Firebase for real-time sync and Google's GeoCoding API for map-based proximity filtering.",
            techStack: ["React", "Tailwind CSS", "Firebase", "GeoCoding API"],
        },
        {
            title: "Movie Hunt",
            image: "/assets/images/MovieHunt.png",
            demo: "https://movie-hunt-swapnil.vercel.app/",
            github: "https://github.com/swapnilgarg7/MovieHunt",
            description: "A data-driven movie discovery platform powered by the TMDb API, surfacing trending and top-rated titles with live search and dark mode. Built on Next.js for fast server-side rendering and SEO-friendly routing.",
            techStack: ["Next.js", "Tailwind CSS", "TMDb API"],
        },
    ]

    return (
        <div id="projects" className="p-5 flex flex-col items-center">
            <h2 className="text-3xl font-bold mt-24 mb-8">Projects</h2>

            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="w-full"
                    variants={cardVariants(index)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-8 max-sm:mb-16">
                        <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl border border-white/10 bg-black/20">
                            {project.image ? (
                                <a href={project.demo} target="_blank" rel="noreferrer" className="block aspect-[16/10] w-full">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full cursor-pointer rounded-xl object-contain transition-transform duration-300 transform-gpu hover:scale-105"
                                    />
                                </a>
                            ) : (
                                <div className="rounded-xl w-full h-48 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 border border-blue border-opacity-40">
                                    <span className="text-blue text-4xl mb-3">⚙</span>
                                    <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">{project.placeholderLabel}</span>
                                </div>
                            )}
                        </div>

                        <div className="w-full md:w-1/2 md:ml-8">
                            <div className="flex items-center gap-3 max-sm:mt-4">
                                <h3 className="text-2xl font-bold text-blue">{project.title}</h3>
                                {project.wip && (
                                    <span className="text-xs font-semibold border border-blue text-blue px-2 py-0.5 rounded-full">WIP</span>
                                )}
                            </div>
                            <p className="mt-4">{project.description}</p>
                            <div className="flex flex-row my-6 gap-4">
                                {project.demo && (
                                    <MagneticButton>
                                        <a href={project.demo} target="_blank" rel="noreferrer"
                                            className="block cursor-pointer bg-blue text-black px-6 py-1 rounded-md hover:bg-black hover:text-blue hover:border hover:border-blue">
                                            Demo
                                        </a>
                                    </MagneticButton>
                                )}
                                {project.github && (
                                    <MagneticButton>
                                        <a href={project.github} target="_blank" rel="noreferrer"
                                            className="block cursor-pointer hover:bg-white hover:text-black px-6 py-1 rounded-md bg-black text-white border border-white">
                                            Github
                                        </a>
                                    </MagneticButton>
                                )}
                            </div>

                            <div className="mt-4 font-bold text-lg">Skills :</div>
                            <div className="flex flex-wrap mt-2 gap-2">
                                {project.techStack.map((tech, i) => (
                                    <div key={i} className="text-blue border border-blue rounded-md px-2 py-1">{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
