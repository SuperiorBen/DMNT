import { AppLayout } from "../../../../layouts/AppLayout"
import { IntroSection } from "../components/IntroSection"
import bgStars from "../../../../assets/stars-bg.webp"
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'


import bgMenu from "../../../../assets/backgroundMenu.svg"
import { useState } from "react"


export const ServicioPage = () => {

    const [isShow, setIsShow] = useState([0, '60px 60px 0px 0px'])

    // Control scroll 
    const { scrollYProgress } = useScroll()
    const positionDiv = useTransform(
        scrollYProgress,
        [0.15, 0.2, 1],
        ['110vh', '0vh', '-10vh']
    )

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        scrollPosition < 0.20 ? setIsShow([0, '60px 60px 0px 0px']) : setIsShow([1, '0px'])
    })


    return (
        <AppLayout>
            <div style={{ height: '500vh', width: '100vw', overflowX: 'hidden' }}>
                <IntroSection />
                <motion.div style={{ overflow: 'hidden', height: '110vh', width: '100vw', zIndex: 3, position: 'fixed', top: positionDiv, left: 0, backgroundColor: '#fff', borderRadius: isShow[1], transition: '1s ease-in-out' }}>
                   {/* Components */}
                    <img style={{ height: '110vh', width: window.screen.width > 900 ? '100vw' : '300vw', position: 'absolute', top: '-10vh', left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
                </motion.div>
                <img src={bgMenu} alt="bgMenu" style={{ position: 'fixed', top: 0, left: '-4em', width: '18em', zIndex: 990, opacity: isShow[0], transition: '1s ease-in-out' }} />
            </div>
        </AppLayout>
    )
}