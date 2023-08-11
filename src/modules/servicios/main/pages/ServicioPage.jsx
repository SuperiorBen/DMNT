import { AppLayout } from "../../../../layouts/AppLayout"
import { IntroSection } from "../components/IntroSection"
import bgStars from "../../../../assets/stars-bg.webp"
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'


import bgMenu from "../../../../assets/backgroundMenu.svg"
import { useState } from "react"
import { InfoSection } from "../components/InfoSection"



export const ServicioPage = () => {

   
    const [isShow, setIsShow] = useState([0, '80px 80px 0px 0px'])

    // Control scroll 
    const { scrollYProgress } = useScroll()
   

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        scrollPosition < 0.20 ? setIsShow([0, '80px 80px 0px 0px']) : setIsShow([1, '0px'])
    })

    return (
        <AppLayout>
            <div style={{ height: '500vh', width: '100vw', overflowX: 'hidden' }}>
                <IntroSection />
                <motion.div style={{
                    overflow: 'hidden', height: '300vh', width: '100vw', zIndex: 3, position: 'absolute', top: '200vh',
                    left: 0, backgroundColor: '#fff', borderRadius: isShow[1], transition: '1s ease-in-out'
                }}>
                    {/* Components */}
                    <InfoSection />
                    <img style={{ height: '100vh', width: window.screen.width > 900 ? '100vw' : '300vw', position: 'absolute', top: '-10vh', left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
                </motion.div>
                <img src={bgMenu} alt="bgMenu" style={{ backgroundColor: '#fff', borderRadius: '15px', position: 'fixed', top: 0, left: '-4em', width: '18em', zIndex: 990, opacity: isShow[0], transition: '1s ease-in-out' }} />
            </div>
        </AppLayout>
    )
}