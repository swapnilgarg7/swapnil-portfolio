import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import { LinkedInIcon, GithubIcon, TwitterIcon } from '../utils/icons';

import YoutubeIcon from '/assets/youtube.png';


gsap.registerPlugin(ScrollTrigger);


export default function Contact() {

    const contactRef = useRef(null);

    const emailIcon = (
        <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 400 400" xml:space="preserve">
            <g id="XMLID_1_">
                <polygon id="XMLID_869_" points="0,127.5 0,274.219 104.8,206.1 	" />
                <polygon id="XMLID_870_" points="400,274.219 400,127.5 295.2,206.1 	" />
                <polygon id="XMLID_871_" points="200,277.5 130.357,225.268 0,310 0,340 400,340 400,310 269.643,225.268 	" />
                <polygon id="XMLID_872_" points="0,90 200,240 400,90 400,60 0,60 	" />
            </g>
        </svg>
    )

    useGSAP(() => {
        const contactItems = gsap.utils.toArray(contactRef.current.children);
        contactItems.forEach((item, index) => {
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


    return (
        <div id="contact" className="p-5 flex flex-col items-center mb-32" ref={contactRef}>
            <h2 className="text-3xl font-bold mb-8">Contact</h2>

            <div className='sm:w-2/3 flex flex-col sm:flex-row justify-center items-center gap-12'>
                <div>
                    <a className="bg-blue p-4 rounded-lg mb-4 flex flex-row items-center text-black font-semibold text-lg
                    cursor-pointer"
                        href="mailto:swapnilgarg810@gmail.com">
                        {emailIcon}
                        <span className="ml-4">swapnilgarg810@gmail.com</span>

                    </a>
                </div>
                <div>
                    <div className="text-blue text-2xl font-semibold mb-8">
                        Let's connect!
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <a href='https://www.linkedin.com/in/swapniltech/' target="_blank" className="flex items-center gap-2">
                            <LinkedInIcon />
                            <span className="text-white font-semibold text-lg hover:text-blue">LinkedIn</span>
                        </a>
                        <a href='https://github.com/swapnilgarg7' target="_blank" className="flex items-center gap-2">
                            <GithubIcon />
                            <span className="text-white font-semibold text-lg hover:text-blue">Github</span>
                        </a>
                        <a href='https://twitter.com/theswapnilgarg' target="_blank" className="flex items-center gap-2">
                            <TwitterIcon />
                            <span className="text-white font-semibold text-lg hover:text-blue">Twitter</span>
                        </a>
                        <a href='https://www.youtube.com/@swapnil_tech' target="_blank" className="flex items-center gap-2">
                            <img src={YoutubeIcon} alt="youtube" className="w-4 h-3 " />
                            <span className="text-white font-semibold text-lg hover:text-blue">Youtube</span>
                        </a>

                    </div>
                </div>
            </div>



        </div>
    )
}
