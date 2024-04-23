import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { profileImg } from '../utils/'


export default function Hero() {
    useGSAP(() => {
        gsap.fromTo(".hero-text", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            stagger: 1,
            delay: 0.5
        })

        gsap.fromTo("#profileImg", {
            opacity: 0,
            x: -100
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 1.5,
            ease: "Power2.easeOut"
        })
    }, [])

    const smoothScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="w-full nav-height bg-black relative">
            <div id="hero" className="h-5/6 w-full flex-center flex-col sm:flex-row justify-between gap-16 sm:gap-32">
                <div >
                    <div className="text-white text-4xl font-bold hero-text max-md:mb-10">Hello, I'm <span className="text-blue">Swapnil Garg</span></div>
                    <div className="text-white text-2xl font-semibold hero-text my-8 max-md:mb-10">I'm a Full Stack Developer</div>
                    <div className="hero-text flex flex-row gap-8">
                        <a href="/assets/SwapnilGargCV.pdf" target="_blank"
                            className=" bg-blue text-black px-8 py-3 rounded-md hover:bg-black hover:text-blue hover:border hover:border-blue">
                            Resume
                        </a>
                        <button onClick={() => smoothScrollTo('contact')}
                            className=" hover:bg-white hover:text-black px-8 py-3 rounded-md bg-black text-white border border-white">
                            Contact
                        </button>

                    </div>
                </div>

                <img id="profileImg" src={profileImg} alt="profile" className="h-1/2 rounded-full" />
            </div>


        </div>
    )
}
