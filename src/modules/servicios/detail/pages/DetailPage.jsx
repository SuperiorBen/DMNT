import { AppLayout } from "../../../../layouts/AppLayout"
import { Helmet } from 'react-helmet-async'
// import { motion } from 'framer-motion'
import { servicesDMNT } from "../helpers/infoServices";
import { useParams } from "react-router-dom";
import { GalaxyBg } from "../../../../layouts/utils/GalaxyBg";
import { BeginSVG } from "../components/stepsSVG/BeginSVG";

const showService = (val) => {
    switch (val) {
        case 'marketing-digital':
            return 0;
        case 'desarrollo-web-aplicaciones':
            return 1;
        case 'audiovisuales':
            return 2;

        default:
            return 3;
    }
}


export default function ServicioPage() {
    const { detail } = useParams();
    const serviceActive = showService(detail)
    const { title, subtitle, description } = servicesDMNT[serviceActive]
    return (
        <AppLayout>
            {/* SEO */}
            <Helmet>
                <title>DMNT Creative Agency - {title}</title>
                <meta name="description" content="Inicio" />
            </Helmet>
            {/* SEO END =============================================================================== */}
            <div
                style={{
                    position: 'absolute', top: 0, left: 0, zIndex: 2, display: 'flex', width: '100vw',
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}>
                <div style={{
                    width: '80vw', height: '13em', display: 'flex', flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'flex-end', marginTop: '7em'
                }}>
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'flex-start', width: '50%'
                    }}>
                        <p style={{
                            fontSize: '2.5em', fontWeight: 700, lineHeight: '1em', color: '#fff',
                            textShadow: '2px 2px 0px rgb(150 101 253 / 80%)',
                            WebkitTextStroke: '1px rgb(150 101 253 / 80%)', margin: 0, marginBottom: '1em'
                        }}>{subtitle}</p>
                        <p style={{
                            fontSize: '1em', fontWeight: 500, lineHeight: '1.4em', color: '#fff', margin: 0
                        }}>{description}</p>
                    </div>
                    <p style={{
                        fontSize: '6em', fontWeight: 700, lineHeight: '1em', color: '#fff', margin: 0, textAlign: 'right', width: '50%',
                        textShadow: '4px 4px 0px rgb(150 101 253 / 80%)', WebkitTextStroke: '1px rgb(150 101 253 / 80%)'
                    }}>{title}</p>
                </div>

                <div style={{
                    display: 'flex', flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'flex-end', marginTop: '7em'
                }}>
                    <BeginSVG />
                </div>

            </div>
            <GalaxyBg />
        </AppLayout>
    )
}