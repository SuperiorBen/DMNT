import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import jump from "../assets/jump.webp"
import { useState } from "react"

export default function AstronautJump() {

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
            src={jump} alt="jump" style={{
                position: 'fixed', zIndex: 1, opacity: isOpacity ? 0 : 1,
                width: window.screen.width > 900 ? (window.screen.width > 1536 ? '34em' : '20em') : '20em',
                height: window.screen.width > 900 ? (window.screen.width > 1536 ? '48em' : '28em') : '32em',
                top: window.screen.width > 900 ? (window.screen.width > 1536 ? 'calc( 50vh - 22em )' : 'calc( 50vh - 12em )') : 'calc( 50vh - 15em )'
            }} />
    )
}
