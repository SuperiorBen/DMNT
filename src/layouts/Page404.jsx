import { AppLayout } from "./AppLayout"
// import { motion } from 'framer-motion'
import bgMenu from "../assets/backgroundMenu.svg"
import notFound from "../assets/404.svg"
import { Helmet } from 'react-helmet-async'
import { GalaxyBg } from "./utils/GalaxyBg"
import { useNavigate } from "react-router-dom"



export default function Page404() {
    const navigate = useNavigate();

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
                <div style={{
                    width: '30em', height: '10em', position: 'absolute',
                    top: 'calc( 50vh - 5em )', left: 0, zIndex: 1, color: '#fff'
                }}>
                    <p style={{ margin: 0, fontSize: '4em', fontWeight: 700, lineHeight: '1em' }}>¡Página no encontrada!</p>
                    <button style={{ width: '100%', height: '2em', background: '#9665FD', fontSize: '1.5em', fontWeight: 700, color: '#fff' }} onClick={() => navigate(-1)}>Regresar</button>
                </div>
                <img style={{ width: '60vw', height: '70vh', position: 'absolute', top: 0, left: 0, zIndex: 0 }} src={notFound} alt="notFound" />
            </div>

            <GalaxyBg />
        </AppLayout>
    )
}