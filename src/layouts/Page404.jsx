import { AppLayout } from "./AppLayout"
// import { motion } from 'framer-motion'
import bgMenu from "../assets/backgroundMenu.svg"
import notFound from "../assets/404.svg"
import { Helmet } from 'react-helmet-async'
import { GalaxyBg } from "./utils/GalaxyBg"

// css variable
const bgMenuStyle = { backgroundColor: '#fff', borderRadius: '15px', position: 'fixed', top: 0, left: '-4em', width: '18em', zIndex: 990, opacity: 1, transition: '1s ease-in-out' }
const content404 = { width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 2 }
const contentText = { width: '100%', height: 'auto', position: 'absolute', top: '80vh', left: 0, zIndex: 1, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
const title = {
    margin: 0, fontWeight: 700, lineHeight: '1em', width: '100%', textAlign: 'center', marginBottom: '0.2em',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '4em' : '3em') : '2em'
}
const btnBack = {
    textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2em', background: '#9665FD', fontSize: '1.5em', fontWeight: 700, color: '#fff', margin: 'auto', borderRadius: '10px', cursor: 'pointer',
    width: window.screen.width > 900 ? '20em' : '90%'
}
const alien = {
    height: '70vh', position: 'absolute', top: '10vh', zIndex: 0,
    width: window.screen.width > 900 ? '60vw' : '90vw',
    left: window.screen.width > 900 ? '20vw' : '5vw'
}
export default function Page404() {

    return (
        <AppLayout>
            {/* SEO */}
            <Helmet>
                <title>DMNT Creative Agency - No encontrado</title>
                <meta name="description" content="Inicio" />
            </Helmet>
            {/* SEO END =============================================================================== */}
            <img src={bgMenu} alt="bgMenu" style={bgMenuStyle} />
            <div style={content404}>
                <div style={contentText}>
                    <p style={title}>¡Página no encontrada!</p>
                    <a href="/" style={btnBack}
                    >¡Volver a orbita!</a>
                </div>
                <img style={alien} src={notFound} alt="notFound" />
            </div>
            <GalaxyBg />
        </AppLayout>
    )
}