import { AppLayout } from "../../../../layouts/AppLayout"
// import { motion } from 'framer-motion'
import bgMenu from "../../../../assets/backgroundMenu.svg"
import { Helmet } from "react-helmet";



export default function ServicioPage() {

    return (
        <AppLayout>
            {/* SEO */}
            <Helmet>
                <title>DMNT Creative Agency - Nombre detalle</title>
                <meta name="description" content="Inicio" />
            </Helmet>
            {/* SEO END =============================================================================== */}
            <img src={bgMenu} alt="bgMenu" style={{ backgroundColor: '#fff', borderRadius: '15px', position: 'fixed', top: 0, left: '-4em', width: '18em', zIndex: 990, opacity: 1, transition: '1s ease-in-out' }} />
            <p>Detalle servicio</p>
        </AppLayout>
    )
}