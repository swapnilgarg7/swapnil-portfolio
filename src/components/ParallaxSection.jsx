import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection({ children, yOffset = 50, className = '' }) {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset])

    return (
        <section ref={sectionRef} className={`relative ${className}`} style={{ background: 'rgba(3,3,17,0.88)' }}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </section>
    )
}
