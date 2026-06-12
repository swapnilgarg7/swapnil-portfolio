import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    useGSAP(() => {
        gsap.from('#about-content', {
            opacity: 0,
            y: 60,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#about-content',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        })
    }, [])

    const stats = [
        { value: '4+', label: 'Years Building' },
        { value: '10+', label: 'Projects Shipped' },
        { value: '5+', label: 'AI Systems' },
    ]

    return (
        <div id="about" className="py-24 px-6 flex flex-col items-center">
            <div id="about-content" className="max-w-3xl w-full">

                <p className="section-label">about</p>
                <h2 className="text-4xl font-bold text-white mb-10">
                    About <span className="text-blue">Me</span>
                </h2>

                <div className="glass rounded-2xl p-8 space-y-6 transition-all duration-300">
                    {/* Accent bar */}
                    <div className="h-px bg-gradient-to-r from-blue/60 via-blue/20 to-transparent mb-2" />

                    <p className="text-white text-lg leading-relaxed">
                        I'm an AI Engineer and Full Stack Developer obsessed with building systems that don't just run, but they{' '}
                        <span className="text-blue font-semibold">think</span> as well. My work sits at the intersection of large language models, agentic orchestration, ERPs, and scalable infrastructure.
                    </p>
                    <p className="text-white text-lg leading-relaxed">
                        I design and ship{' '}
                        <span className="text-blue font-semibold">agentic AI workflows</span>{' '}
                        which are multi-step, autonomous pipelines powered by LLMs that can plan, use tools, and self-correct. From prompt engineering and RAG architectures to multi-agent frameworks like LangGraph, I bridge research-grade AI with production-ready engineering.
                    </p>
                    <p className="text-white text-lg leading-relaxed">
                        On the infrastructure side, I bring a strong{' '}
                        <span className="text-blue font-semibold">DevOps</span>{' '}
                        mindset, which includes containerising workloads with Docker, orchestrating deployments on Kubernetes, automating CI/CD pipelines, and keeping systems observable with structured logging and metrics.
                    </p>
                    <p className="text-white text-lg leading-relaxed">
                        Whether it's wiring up an LLM to real-world tools, fine-tuning retrieval pipelines, or shipping a full-stack web app, <br/>I care about one thing : building things that actually work at scale.
                    </p>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4 pt-6 mt-2 border-t border-blue/20">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <div className="text-3xl font-bold text-blue">{value}</div>
                                <div className="text-gray-200 text-sm mt-1">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
