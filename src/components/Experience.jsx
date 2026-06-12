import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const experienceRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray('.exp-card');
        items.forEach((item) => {
            gsap.from(item, {
                opacity: 0,
                x: -40,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 82%',
                    toggleActions: 'play none none none'
                }
            })
        })
    }, [])

    const experience = [
        {
            title: 'Software Engineer',
            company: 'GEP',
            location: 'Mumbai, India',
            date: 'June 2025 – Present',
            tasks: [
                'Developing low-code components using Angular with ASP.NET MVC and .NET Core backend services for a client-facing platform',
                'Designed and implemented RESTful APIs using ASP.NET Core, enabling seamless integration between frontend modules and backend services',
                'Initialized the testing framework for the team and wrote unit tests using Jasmine and Karma, improving code coverage from 0% to 79% within the first sprint',
                'Built an AI contract compliance system for invoices using Azure OpenAI to generate compliance scores and reports',
                'Implemented RAG using LangChain with ChromaDB as the vector database to index and store embeddings',
                'Integrated Copilot-based test case generation to automatically create unit and regression test scenarios from feature specifications',
                'Built an AI-assisted visual regression testing tool using Selenium WebDriver to capture and compare UI screenshots across build environments',
            ]
        },
        {
            title: 'Software Developer',
            company: 'CliniQ',
            location: 'Remote',
            date: 'December 2024 – June 2025',
            tasks: [
                'Created a full-stack AI-powered software solution with a patient management system using Next.js, TailwindCSS, TypeScript, Supabase, and Prisma',
                'Utilised OpenAI API, Perplexity API, and Deepgram API to build AI chat and voice bots for patients and doctors',
                'Implemented data pre-fetching and client-side caching in Next.js, resulting in a 15% perceived performance boost',
                'Integrated AI into the CI pipeline to auto-review pull requests for missing tests, risky code paths, and security vulnerabilities',
            ]
        },
        {
            title: 'Software Development Intern',
            company: 'Barclays UK',
            location: 'Northampton, England',
            date: 'June 2024 – August 2024',
            tasks: [
                'Developed RESTful APIs using Java and Spring Boot for Corporate Lending, ensuring high performance and scalability',
                'Designed and implemented a distributed caching strategy via Redis, reducing database load by 35% and improving API response time by 40%',
                'Wrote comprehensive unit tests using JUnit and Mockito, increasing SonarQube coverage from 40% to 93.2%',
            ]
        },
        {
            title: 'Freelance Developer',
            company: 'Stone Arts Kenya',
            location: 'Remote',
            date: 'November 2023 – November 2024',
            tasks: [
                'Spearheaded end-to-end development of an ERP software solution for a Kenya-based company',
                'Delivered a highly responsive front-end with Next.js and TailwindCSS',
                'Leveraged Firebase for database management, authentication, and storage',
                'Streamlined workflows by implementing HTML-to-Excel export functionality',
            ]
        },
        {
            title: 'Chief Technology Officer',
            company: 'Krayadotshop Pvt Ltd',
            location: 'Delhi, India',
            date: 'December 2022 – October 2023',
            tasks: [
                'Led a team of 5 tech interns to develop the landing page in HTML, CSS, and JavaScript',
                'Built the Seller mobile app using Flutter and Firebase for video-based product uploads',
                'Architected the Buyer app using Next.js and TailwindCSS with Firebase for video-commerce shopping',
            ]
        },
        {
            title: 'App Developer',
            company: 'RENRZY Solutions LLP',
            location: 'Delhi, India',
            date: 'October 2022 – December 2022',
            tasks: [
                'Created a mobile app using Flutter and Firebase providing real-time electric bike telemetry',
                'Integrated Google Maps API for live bike location tracking',
            ]
        }
    ]

    return (
        <div id="experience" className="py-24 px-6 flex flex-col items-center" ref={experienceRef}>
            <div className="max-w-3xl w-full">
                <p className="section-label">experience</p>
                <h2 className="text-4xl font-bold text-white mb-12">
                    Work <span className="text-blue">History</span>
                </h2>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-blue/70 via-blue/30 to-transparent" />

                    {experience.map((exp, index) => (
                        <div key={index} className="exp-card relative pl-12 mb-8">
                            {/* Timeline dot */}
                            <div
                                className="absolute left-0 top-5 w-7 h-7 rounded-full flex items-center justify-center"
                                style={{ background: 'rgba(100,233,238,0.12)', border: '1.5px solid rgba(100,233,238,0.6)', boxShadow: '0 0 12px rgba(100,233,238,0.3)' }}
                            >
                                <div className="w-2 h-2 rounded-full bg-blue" />
                            </div>

                            <div className="glass rounded-xl p-6 transition-all duration-300 group">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-blue group-hover:text-white transition-colors duration-200">{exp.title}</h3>
                                        <p className="text-white font-medium">{exp.company}
                                            <span className="text-gray-200 font-normal text-sm ml-2">— {exp.location}</span>
                                        </p>
                                    </div>
                                    <span className="text-xs font-mono text-blue/70 whitespace-nowrap mt-1">{exp.date}</span>
                                </div>
                                <ul className="space-y-2">
                                    {exp.tasks.map((task, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-200 text-sm leading-relaxed">
                                            <span className="text-blue mt-0.5 shrink-0">›</span>
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
