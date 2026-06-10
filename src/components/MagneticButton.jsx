import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className = '', strength = 0.35, ...props }) {
    const ref = useRef(null)
    const [xy, setXy] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        setXy({
            x: (e.clientX - cx) * strength,
            y: (e.clientY - cy) * strength,
        })
    }

    const handleMouseLeave = () => setXy({ x: 0, y: 0 })

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: xy.x, y: xy.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
            className="inline-block"
        >
            <div className={className} {...props}>
                {children}
            </div>
        </motion.div>
    )
}
