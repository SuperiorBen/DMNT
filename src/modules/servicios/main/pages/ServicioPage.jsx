import { AppLayout } from "../../../../layouts/AppLayout"
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import bgMenu from "../../../../assets/backgroundMenu.svg"
import { lazy, useState } from "react"

const ScrollIndicator = lazy(() => import("../../../../layouts/utils/ScrollIndicator"))
const IntroSection = lazy(() => import("../components/IntroSection"))
const InfoSection = lazy(() => import("../components/InfoSection"))


import { Helmet } from 'react-helmet-async'



export default function ServicioPage() {
    const [isShow, setIsShow] = useState(0)

    // Control scroll 
    const { scrollYProgress } = useScroll()


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        scrollPosition < 0.40 ? setIsShow(0) : setIsShow(1)
    })

    // css variable
    const whiteSpace = {
        overflow: 'hidden', width: '100vw', zIndex: 3, position: 'absolute', top: '200vh', left: 0, backgroundColor: '#fff', transition: '1s ease-in-out',
        borderRadius: window.screen.width > 900 ? '40px 40px 0px 0px' : '10px 10px 0px 0px',
        height: window.screen.width > 900 ? (window.screen.width > 1536 ? '195vh' : '265vh') : '348vh'
    }
    return (
        <AppLayout>
            {/* SEO */}
            <Helmet>
                <title>DMNT Creative Agency - Servicios</title>
                <meta name="description" content="Inicio" />
            </Helmet>
            {/* SEO END =============================================================================== */}
            <div style={{ height: '370vh', width: '100vw', overflowX: 'hidden' }}>
                <ScrollIndicator />
                <IntroSection />
                <motion.div style={whiteSpace}>
                    <InfoSection />
                </motion.div>
                <img src={bgMenu} alt="bgMenu" style={{ backgroundColor: '#fff', borderRadius: '15px', position: 'fixed', top: 0, left: '-4em', width: '18em', zIndex: 990, opacity: isShow, transition: '1s ease-in-out' }} />
            </div>
        </AppLayout>
    )
}