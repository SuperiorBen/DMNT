import { AppLayout } from "../../../../layouts/AppLayout"
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import bgMenu from "../../../../assets/backgroundMenu.svg"
import { lazy, useState } from "react"
import ReactGA from "react-ga4";
import shareSeo from "../../../../assets/shareSeo.webp";


const ScrollIndicator = lazy(() => import("../../../../layouts/utils/ScrollIndicator"))
const IntroSection = lazy(() => import("../components/IntroSection"))
const InfoSection = lazy(() => import("../components/InfoSection"))


import { Helmet } from 'react-helmet-async'



export default function ServicioPage() {
    {/* Gtag */ }
    ReactGA.send({ hitType: "pageview", page: "/servicios", title: "Servicios" })

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
        height: window.screen.width > 900 ? (window.screen.width > 1536 ? '185vh' : '265vh') : '350vh'
    }
    return (
        <AppLayout>
            {/* SEO */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>DMNT Creative Agency - Nuestros servicios</title>
                <meta name="description" content="Creamos experiencias digitales con tu marca, generando contenido de valor con un alto grado de responsabilidad y calidad. Creemos que si se puede soñar, se puede lograr" />
                <link rel="canonical" href="https://test.dmnt.com.sv/servicios" />
                {/* Open graph */}
                <meta property="og:title" content="DMNT Creative Agency - ¿Quiénes somos? Conócenos" />
                <meta property="og:description" content="Creamos experiencias digitales con tu marca, generando contenido de valor con un alto grado de responsabilidad y calidad. Creemos que si se puede soñar, se puede lograr" />
                <meta property="og:image" content={shareSeo} />
                <meta property="og:image:width" content="369" />
                <meta property="og:image:height" content="300" />
                <meta name="robots" content="index, follow"></meta>
            </Helmet>
            {/* SEO END =============================================================================== */}
            <div style={{ height: '370vh', width: '100vw', overflowX: 'hidden' }}>
                <ScrollIndicator />
                <IntroSection />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={whiteSpace}>
                    <InfoSection />
                </motion.div>
                <img src={bgMenu} alt="bgMenu" style={{ backgroundColor: '#fff', borderRadius: '15px', position: 'fixed', top: 0, left: '-4em', width: '18em', zIndex: 990, opacity: isShow, transition: '1s ease-in-out' }} />
            </div>
        </AppLayout>
    )
}