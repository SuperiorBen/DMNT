import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import jump from "../assets/jump.webp"
import jumpSmall from "../assets/jumpSmall.webp"
import { useState } from "react"
const screen = window.screen.width > 900 ? true : false

export const AstronautJump = () => {

    const [isOpacity, setOpacity] = useState(false)

    // Control scroll 
    const { scrollYProgress } = useScroll()
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        scrollPosition > 0.1 ? setOpacity(true) : setOpacity(false)
    })

    return (
        <motion.img
            initial={{ right: '100%', opacity: 0, rotate: 0 }}
            animate={{ right: '23%', opacity: isOpacity ? 0 : 1, rotate: 10 }}
            transition={{ duration: 1, delay: 0.5, rotate: { duration: 5, repeatType: "reverse", repeat: Infinity } }}
            src={screen ? jump : jumpSmall } alt="jump" style={{
                width: window.screen.width > 900 ? '28%' : '75%', height: window.screen.width > 900 ? '82%' : '50%',
                position: 'fixed', top: window.screen.width > 900 ? 'calc( 18% / 2 )' : '25%', zIndex: 1, opacity: isOpacity ? 0 : 1
            }} />
    )
}
