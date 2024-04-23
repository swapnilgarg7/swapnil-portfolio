import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);


export default function Skills() {

    const skillsRef = useRef(null);

    useGSAP(() => {
        const skillsItems = gsap.utils.toArray(skillsRef.current.children);
        skillsItems.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    end: 'top 40%',
                    toggleActions: 'play none none none',
                    once: true
                },
                stagger: 0.2
            })
        })
    }, []);

    const skills = [
        { "name": "HTML", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { "name": "CSS", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { "name": "TailwindCSS", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },

        { "name": "Javascript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { "name": "TypeScript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { "name": "Node.js", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
        { "name": "React", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { "name": "Next.js", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { "name": "Three.js", "icon": "https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" },

        { "name": "Firebase", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },


        { "name": "MongoDB", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { "name": "MySQL", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { "name": "Flutter", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
        {
            "name": "Dart", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
        },
        { "name": "C++", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { "name": "Python", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { "name": "Java", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { "name": "OpenCV", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
        { "name": "Figma", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { "name": "Git", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { "name": "Linux", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },

    ]

    return (
        <div id="skills" className="p-5 flex flex-col items-center" ref={skillsRef}>
            <h2 className="text-3xl font-bold mb-8">Skills</h2>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 items-center'>
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                        <p className="text-xl">{skill.name}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
