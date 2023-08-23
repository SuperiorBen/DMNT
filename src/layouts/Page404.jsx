import { AppLayout } from "./AppLayout"
// import { motion } from 'framer-motion'
import bgMenu from "../assets/backgroundMenu.svg"
import notFound from "../assets/404.svg"
import { Helmet } from 'react-helmet-async'
import { GalaxyBg } from "./utils/GalaxyBg"



export default function Page404() {

    return (
        <AppLayout>
            {/* SEO */}
            <Helmet>
                <title>DMNT Creative Agency - No encontrado</title>
                <meta name="description" content="Inicio" />
            </Helmet>
            {/* SEO END =============================================================================== */}
            <img src={bgMenu} alt="bgMenu" style={{ backgroundColor: '#fff', borderRadius: '15px', position: 'fixed', top: 0, left: '-4em', width: '18em', zIndex: 990, opacity: 1, transition: '1s ease-in-out' }} />
            <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 2 }}>
                <img style={{ width: '50vw', height: 'auto', position: 'absolute', top: 0, left: 0 }} src={notFound} alt="notFound" />
            </div>

            <GalaxyBg />
        </AppLayout>
    )
}