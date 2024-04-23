import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


export default function Projects() {

    const projectsRef = useRef(null);

    useGSAP(() => {
        const projItems = gsap.utils.toArray(projectsRef.current.children);
        projItems.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 70%',
                    end: 'top 40%',
                    toggleActions: 'play none none none'
                }
            })
        })

    }, [])

    const projects = [
        {
            title: "Roomie Connect",
            image: "/assets/images/roomie.png",
            demo: "https://roomie-connect.vercel.app/",
            github: "https://github.com/swapnilgarg7/RoomieConnect",
            description: " A full-stack website built using React, Tailwind CSS, and Firebase to simplify the process of finding a roommate. Implemented Authentication and Database CRUD operations. Integrated Google's GeoCoding API to fetch coordinates and show the flat's location on a map.",
            techStack: ["React", "Tailwind CSS", "Firebase"],
        },

        {
            title: "ZenChat",
            image: "/assets/images/ZenChat.jpeg",
            demo: "https://www.youtube.com/watch?v=2pz5uiUzlmY",
            github: "https://github.com/swapnilgarg7/ZenChat",
            description: "Zenchat is an AI therapist chatbot app built with Flutter and Firebase that provides a virtual platform for individuals to engage in mental health conversations and receive emotional support. It also connects them to professionals if needed. This won the 2nd place in CodeValds Hackathon.",
            techStack: ["Flutter", "Firebase", "OpenAI"],
        },
        {
            title: "Movie Hunt",
            image: "/assets/images/MovieHunt.png",
            demo: "https://movie-hunt-swapnil.vercel.app/",
            github: "https://github.com/swapnilgarg7/MovieHunt",
            description: "MovieHunt is a website that help movie enthusiasts find a movie to watch. It has features like showing Trending and Top Rated section, as well as a search bar. You can also switch to Dark Mode. The TMDb API is used to fetch the data and keep it constantly updated.",
            techStack: ["Next.js", "Tailwind CSS", "TMDb API"],
        },
        {
            title: "Anti-Mewing Bot",
            image: "/assets/images/mewing.png",
            demo: "https://www.youtube.com/watch?v=bKvlZrEfbwQ",
            github: "https://github.com/swapnilgarg7/anti-mewing-bot",
            description: "A python bot that detects if a person is mewing using OpenCV, and asks them to stop.",
            techStack: ["Python", "OpenCV"],
        },
        {
            title: "Breast Cancer Predictor",
            image: "/assets/images/BCP.png",
            demo: "https://github.com/swapnilgarg7/BreastCancerPredictor",
            github: "https://github.com/swapnilgarg7/BreastCancerPredictor",
            description: "A GUI program(Python + Tkinter) that predicts whether the patient has Breast Cancer or not using Machine Learning.  Random Forest Classifier was used as it gave the best accuracy(94.74%) ",
            techStack: ["Python", "Tkinter", "Machine Learning"],
        },
        {
            title: "Portfolio",
            image: "/assets/images/portfolio.png",
            demo: "https://swapnilgarg.vercel.app/",
            github: "https://github.com/swapnilgarg7/swapnil-portfolio",
            description: "My portfolio website built using React and Tailwind CSS. ",
            techStack: ["React", "Tailwind CSS"],
        },
    ]

    return (
        <div id="projects" className="p-5 flex flex-col items-center" ref={projectsRef}>
            <h2 className="text-3xl font-bold mt-24 mb-8">Projects</h2>

            {projects.map((project, index) => (
                <div>
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-8 max-sm:mb-16">
                        <div className="w-full md:w-1/2 relative  overflow-hidden">
                            <a href={project.demo} target="_blank">
                                <img src={project.image} alt={project.title}
                                    className="cursor-pointer rounded-lg w-full h-full object-cover transition-transform duration-300 transform-gpu hover:scale-110" />
                            </a>

                        </div>
                        <div className="w-full md:w-1/2 md:ml-8">
                            <h3 className="text-2xl font-bold text-blue max-sm:mt-4">{project.title}</h3>
                            <p className="mt-4">{project.description}</p>
                            <div className="flex flex-row my-6 gap-4">
                                <a href={project.demo} target="_blank"
                                    className="cursor-pointer bg-blue text-black px-6 py-1 rounded-md hover:bg-black hover:text-blue hover:border hover:border-blue">
                                    Demo
                                </a>
                                <a href={project.github} target="_blank"
                                    className="cursor-pointer hover:bg-white hover:text-black px-6 py-1 rounded-md bg-black text-white border border-white">
                                    Github
                                </a>

                            </div>

                            <div className=' mt-4 font-bold text-lg'>Skills : </div>
                            <div className="flex mt-2">
                                {project.techStack.map((tech, index) => (
                                    <div className=" text-blue border border-blue  rounded-md px-2 py-1 mr-2">{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
