import { AppLayout } from "../../../../layouts/AppLayout"
import { Helmet } from 'react-helmet-async'
// import { motion } from 'framer-motion'
import { servicesDMNT } from "../helpers/infoServices";
import { useParams } from "react-router-dom";
import { GalaxyBg } from "../../../../layouts/utils/GalaxyBg";
import { BeginSVG } from "../components/stepsSVG/BeginSVG";
import { MiddleSVG } from "../components/stepsSVG/MiddleSVG";
import { EndSVG } from "../components/stepsSVG/EndSVG";
import { useState } from "react";

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

const isActive = {
    fillColor: '#9665FD',
    fillBorderColor: '#9665FD',
    opacityColor: '1',
    opacityBorderColor: '1'
}
const notActive = {
    fillColor: '#fff',
    fillBorderColor: '#fff',
    opacityColor: '0.1',
    opacityBorderColor: '0.4'
}

export default function ServicioPage() {
    const { detail } = useParams();
    const serviceActive = showService(detail)
    const { title, subtitle, description, steps } = servicesDMNT[serviceActive]

    const [activeStep, setStep] = useState(0)

    const clickStep = (val) => {
        console.log(val)
        setStep(val)
    }

    const stepSelected = (val) => {
        return activeStep == val ? isActive : notActive
    }

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
                    {
                        steps.map((step, i) => {
                            if (i == 0) {
                                return <div onClick={() => clickStep(i)} key={i} style={{ cursor: 'pointer' }}><BeginSVG item={stepSelected(i)} title={step.title} /></div>
                            }
                            if (i == 4) {
                                return <div onClick={() => clickStep(i)} key={i} style={{ cursor: 'pointer', marginLeft: '-2em' }}><EndSVG item={stepSelected(i)} title={step.title} /></div>
                            }
                            return <div onClick={() => clickStep(i)} key={i} style={{ cursor: 'pointer', marginLeft: '-2em' }}><MiddleSVG item={stepSelected(i)} title={step.title} /></div>
                        })
                    }
                </div>

                <div style={{ width: '30em', height: '16em', position: 'relative', top: '2em', right: '-20em' }}>
                    <div style={{
                        width: '30em', height: '3em', position: 'absolute', top: 0, right: 0, backgroundColor: '#7A4ADE', zIndex: 1, borderRadius: 10,
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <p style={{ fontSize: '2em', fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em' }}>
                            {steps[activeStep].title}</p></div>
                    <div style={{
                        width: '28em', height: '16em', position: 'absolute', top: 0, right: '1em', backgroundColor: 'rgb(255 255 255 / 10%)', zIndex: 0, borderRadius: 10,
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <p style={{ fontSize: '1.8em', fontWeight: 500, color: '#fff', margin: 0, lineHeight: '1.2em', width: '90%', marginTop: '1.5em' }}>
                            {steps[activeStep].description}</p>
                    </div>
                </div>

            </div>
            <GalaxyBg />
        </AppLayout>
    )
}