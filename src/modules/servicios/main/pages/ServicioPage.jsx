import { AppLayout } from "../../../../layouts/AppLayout"
import { IntroSection } from "../components/IntroSection"
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'


import bgMenu from "../../../../assets/backgroundMenu.svg"
import { useState } from "react"
import { InfoSection } from "../components/InfoSection"



export const ServicioPage = () => {


    const [isShow, setIsShow] = useState(0)

    // Control scroll 
    const { scrollYProgress } = useScroll()


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        scrollPosition < 0.40 ? setIsShow(0) : setIsShow(1)
    })

    return (
        <AppLayout>
            <div style={{ height: '500vh', width: '100vw', overflowX: 'hidden' }}>
                <IntroSection />
                <motion.div style={{
                    overflow: 'hidden', height: '300vh', width: '100vw', zIndex: 3, position: 'absolute', top: '200vh',
                    left: 0, backgroundColor: '#fff',
                    borderRadius: window.screen.width > 900 ? '40px 40px 0px 0px' : '10px 10px 0px 0px', transition: '1s ease-in-out'
                }}>
                    {/* Components */}
                    <InfoSection />
                </motion.div>
                <img src={bgMenu} alt="bgMenu" style={{ backgroundColor: '#fff', borderRadius: '15px', position: 'fixed', top: 0, left: '-4em', width: '18em', zIndex: 990, opacity: isShow, transition: '1s ease-in-out' }} />
            </div>
        </AppLayout>
    )
}