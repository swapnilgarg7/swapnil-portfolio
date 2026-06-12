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
            category: 'Languages',
            emoji: '💻',
            skills: [
                { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
                { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
                { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
                { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
                { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
            ]
        },
        {
            category: 'Frontend',
            emoji: '🎨',
            skills: [
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
                { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
                { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'Three.js', icon: 'https://skillicons.dev/icons?i=threejs' },
            ]
        },
        {
            category: 'Backend',
            emoji: '⚡',
            skills: [
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
                { name: 'Express.js', icon: 'https://skillicons.dev/icons?i=express' },
                { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
                { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
                { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
                { name: 'REST API', icon: null },
            ]
        },
        {
            category: 'Databases & Cloud',
            emoji: '🗄️',
            skills: [
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
                { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
                { name: 'ChromaDB', icon: 'https://avatars.githubusercontent.com/u/109477813?s=80' },
                { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
                { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
                { name: 'Caching', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
            ]
        },
        {
            category: 'AI & ML',
            emoji: '🤖',
            skills: [
                { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/ffffff' },
                { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=80' },
                { name: 'LangGraph', icon: 'https://avatars.githubusercontent.com/u/126733545?s=80' },
                { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
                { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
                { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
                { name: 'Machine Learning', icon: null },
                { name: 'n8n', icon: 'https://avatars.githubusercontent.com/u/45487711?s=80' },
                { name: 'LLMs', icon: null },
                { name: 'MCPs', icon: null },
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
            category: 'Testing',
            emoji: '🧪',
            skills: [
                { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg' },
                { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' },
                { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg' },
                { name: 'Jasmine', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg' },
                { name: 'Karma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/karma/karma-original.svg' },
                { name: 'JUnit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain.svg' },
                { name: 'Mockito', icon: 'https://github.com/mockito.png?size=80' },
                { name: 'Performance Tuning', icon: null },
            ]
        },
        {
            category: 'Tools & Design',
            emoji: '✦',
            skills: [
                { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
                { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
                { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
            ]
        },
    ];

    return (
        <div id="skills" className="py-24 px-6 flex flex-col items-center" ref={skillsRef}>
            <div className="max-w-4xl w-full">
                <p className="section-label">skills</p>
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
                                        {skill.icon && (
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-8 h-8 object-contain shrink-0"
                                                onError={(e) => { e.target.style.display = 'none' }}
                                            />
                                        )}
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
