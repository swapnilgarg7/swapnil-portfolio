import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


export default function Experience() {

    const experienceRef = useRef(null);

    useGSAP(() => {
        const expItems = gsap.utils.toArray(experienceRef.current.children);
        expItems.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    end: 'top 40%',
                    toggleActions: 'play none none none'
                }
            })
        })

    }, [])

    const experience = [
        {
            title: 'Technology Developer Intern',
            company: 'Barclays, United Kingdom',
            date: 'June 2024 - August 2024',
            tasks: [
                'Will be working with the Barclays Team on this',
            ]
        },
        {
            title: 'Freelance Developer',
            company: 'Stone Arts Kenya',
            date: 'November 2023 - Present',
            tasks: [
                "Spearheading the end-to-end development of ERP Software Solution for a Kenya-based company",
                "Utilizing Next.js and TailwindCSS to delivery a highly responsive front-end",
                "Leveraging Firebase for Database Management, Authentication and Storage solutions",
                "Implemented functionalities like converting HTML Table Data to Excel format to streamline workflows",
            ]
        },
        {
            title: 'Chief Technology Officer ',
            company: 'Krayadotshop Pvt Ltd',
            date: 'December 2022 - October 2023',
            tasks: [
                "Led a team of 5 Tech interns to develop the landing page website in HTML, CSS, and Javascript",
                "Built the Mobile App using Flutter and Firebase for Sellers to upload their products videos",
                "Developed the Buyer App using Next.js and TailwindCSS with Firebase for Buyers to shop through videos",
            ]
        },
        {
            title: 'App Developer',
            company: 'RENRZY Solutions LLP',
            date: 'October 2022 - December 2022',
            tasks: [
                "Developed a Mobile App using Flutter and Firebase, providing information about the electric bike of the user",
                "Integrated Google Maps API to showcase real-time bike location",
            ]
        }
    ]

    return (
        <div id="experience" className="p-5 flex flex-col items-center" ref={experienceRef}>
            <h2 className="text-3xl font-bold mb-8">Experience</h2>

            {experience.map((exp, index) => (
                <div key={index} className="experience-item w-2/3 flex flex-col items-start mb-8">
                    <h3 className="text-xl font-semibold text-blue">{exp.title}</h3>
                    <p className="text-white">{exp.company}</p>
                    <p className="text-gray-200">{exp.date}</p>
                    <ul className="list-disc ml-8">
                        {exp.tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
