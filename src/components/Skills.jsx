import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const skillsRef = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray('.skill-category').forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 82%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        });
    }, []);

    const skillCategories = [
        {
            category: 'AI & Agents',
            emoji: '🤖',
            skills: [
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg' },
                { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=80' },
                { name: 'n8n', icon: 'https://avatars.githubusercontent.com/u/45487711?s=80' },
                { name: 'Vector DBs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
            ]
        },
        {
            category: 'DevOps',
            emoji: '⚙️',
            skills: [
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
                { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
                { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
                { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
            ]
        },
        {
            category: 'Full Stack',
            emoji: '🌐',
            skills: [
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
            ]
        },
        {
            category: 'Other',
            emoji: '✦',
            skills: [
                { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
                { name: 'Three.js', icon: 'https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png' },
                { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
                { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
                { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
                { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
            ]
        }
    ];

    return (
        <div id="skills" className="py-24 px-6 flex flex-col items-center" ref={skillsRef}>
            <div className="max-w-4xl w-full">
                <p className="section-label">03 — skills</p>
                <h2 className="text-4xl font-bold text-white mb-12">
                    Tech <span className="text-blue">Stack</span>
                </h2>

                <div className="space-y-10">
                    {skillCategories.map((cat, catIndex) => (
                        <div key={catIndex} className="skill-category">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-xl">{cat.emoji}</span>
                                <h3 className="text-base font-semibold text-blue tracking-wide uppercase">{cat.category}</h3>
                                <div className="flex-1 h-px bg-blue/20" />
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                {cat.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="glass flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group cursor-default"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-8 h-8 object-contain shrink-0"
                                            onError={(e) => { e.target.style.display = 'none' }}
                                        />
                                        <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
