import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { profileImg } from '../utils/'
import MagneticButton from './MagneticButton'

export default function Hero() {
    useGSAP(() => {
        gsap.fromTo('.hero-text', { opacity: 0, y: 30 }, {
            opacity: 1, y: 0,
            duration: 0.9,
            stagger: 0.2,
            delay: 0.3,
            ease: 'power3.out'
        })
        gsap.fromTo('#profileImg', { opacity: 0, scale: 0.85 }, {
            opacity: 1, scale: 1,
            duration: 1.1,
            delay: 0.6,
            ease: 'power3.out'
        })
    }, [])

    const smoothScrollTo = (targetId) => {
        const el = document.getElementById(targetId)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
    }

    return (
        <div className="w-full nav-height relative px-8">
            <div id="hero" className="h-5/6 w-full flex items-center flex-col sm:flex-row justify-between gap-16 sm:gap-32 max-w-5xl mx-auto">
                <div>
                    <p className="hero-text section-label mb-4">hello, world</p>
                    <div className="hero-text text-5xl sm:text-6xl font-bold text-white mb-3 leading-tight">
                        I'm <span className="text-blue">Swapnil</span><br />Garg
                    </div>
                    <div className="hero-text text-xl font-semibold text-gray-200 mb-3">
                        AI Engineer & Full Stack Developer
                    </div>
                    <div
                        className="hero-text text-base font-medium italic mb-10"
                        style={{ color: '#64E9EE', textShadow: '0 0 20px rgba(100,233,238,0.4)' }}
                    >
                        Building autonomous systems that think and scale.
                    </div>
                    <div className="hero-text flex flex-row gap-4">
                        <MagneticButton>
                            <a href="https://drive.google.com/file/d/1z2Srhx1Ru25RTFV9su09QmiVA2XAtKN5/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                                className="block px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                                style={{ background: '#64E9EE', color: '#030311' }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#64E9EE'; e.currentTarget.style.boxShadow = 'inset 0 0 0 1.5px #64E9EE' }}
                                onMouseLeave={e => { e.currentTarget.style.background = '#64E9EE'; e.currentTarget.style.color = '#030311'; e.currentTarget.style.boxShadow = 'none' }}
                            >
                                Resume
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <button onClick={() => smoothScrollTo('contact')}
                                className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200"
                                style={{ border: '1.5px solid rgba(255,255,255,0.25)' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = '#64E9EE'; e.currentTarget.style.color = '#64E9EE' }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'white' }}
                            >
                                Contact
                            </button>
                        </MagneticButton>
                    </div>
                </div>

                <div className="relative shrink-0">
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'radial-gradient(circle, rgba(100,233,238,0.2) 0%, transparent 70%)', transform: 'scale(1.4)' }}
                    />
                    <img
                        id="profileImg"
                        src={profileImg}
                        alt="Swapnil Garg"
                        className="relative rounded-full"
                        style={{ width: 260, height: 260, objectFit: 'cover', border: '2px solid rgba(100,233,238,0.3)', boxShadow: '0 0 40px rgba(100,233,238,0.15)' }}
                    />
                </div>
            </div>
        </div>
    )
}
