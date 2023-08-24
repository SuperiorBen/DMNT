import { AppLayout } from "../../../../layouts/AppLayout"
import { Helmet } from 'react-helmet-async'
// import { motion } from 'framer-motion'
import { servicesDMNT } from "../helpers/infoServices";
import { useParams } from "react-router-dom";
import { GalaxyBg } from "../../../../layouts/utils/GalaxyBg";
import { BeginSVG, BeginSVGmobil } from "../components/stepsSVG/BeginSVG";
import { MiddleSVG, MiddleSVGmobil } from "../components/stepsSVG/MiddleSVG";
import { EndSVG, EndSVGmobil } from "../components/stepsSVG/EndSVG";
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
            <div style={{
                position: 'absolute', top: 0, left: 0, zIndex: 2, display: 'flex', width: '100vw',
                height: '100vh',
                flexDirection: 'column',
                alignItems: window.screen.width > 900 ? 'center' : 'flex-start',
                justifyContent: 'center', overflow: 'hidden'
            }}>
                <div style={{
                    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '80vw' : '80vw') : '60vw',
                    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '16em' : '16em') : '25em',
                    display: 'flex', flexDirection: window.screen.width > 900 ? 'row' : 'column-reverse',
                    justifyContent: window.screen.width > 900 ? 'center' : 'flex-end',
                    alignItems: window.screen.width > 900 ? 'flex-start' : 'flex-end',
                    position: 'absolute',
                    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '7em') : '7em',
                    left: window.screen.width > 900 ? (window.screen.width > 1536 ? '10vw' : '10vw') : '5vw'
                }}>
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'flex-start', width: window.screen.width > 900 ? '50%' : '100%',
                        marginTop: window.screen.width > 900 ? '0em' : '1em'
                    }}>
                        <p style={{
                            fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '4em' : '2em') : '1.5em',
                            fontWeight: 700, lineHeight: '1em', color: '#fff',
                            textShadow: '2px 2px 0px rgb(150 101 253 / 80%)',
                            WebkitTextStroke: '1px rgb(150 101 253 / 80%)', margin: 0, marginBottom: '1em'
                        }}>{subtitle}</p>
                        <p style={{
                            fontSize:  window.screen.width > 900 ? (window.screen.width > 1536 ? '2em' : '1em') : '0.8em'
                            , fontWeight: 500, lineHeight: '1.4em', color: '#fff', margin: 0
                        }}>{description}</p>
                    </div>
                    <p style={{
                        fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '6em') : '3em', fontWeight: 700,
                        lineHeight: '1em', color: '#fff', margin: 0, textAlign: window.screen.width > 900 ? 'right' : 'left', width: window.screen.width > 900 ? '50%' : '100%',
                        textShadow: '4px 4px 0px rgb(150 101 253 / 80%)', WebkitTextStroke: '1px rgb(150 101 253 / 80%)'
                    }}>{title}</p>
                </div>


                <div style={{
                    display: 'flex', flexDirection: window.screen.width > 900 ? 'row' : 'column',
                    justifyContent: 'center', alignItems: 'flex-end',
                    position: window.screen.width > 900 ? 'relative' : 'absolute',
                    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '12em' : '9em') : '1em',
                    right: window.screen.width > 900 ? (window.screen.width > 1536 ? 'none' : 'none') : '2vw'
                }}>
                    {
                        steps.map((step, i) => {
                            if (i == 0) {
                                return <div onClick={() => clickStep(i)} key={i} style={{ cursor: 'pointer' }}>
                                    {
                                        window.screen.width > 900 ? <BeginSVG item={stepSelected(i)} title={step.title} /> : <BeginSVGmobil item={stepSelected(i)} title={step.title} />
                                    }
                                </div>

                            }
                            if (i == 4) {
                                return <div onClick={() => clickStep(i)} key={i} style={{
                                    cursor: 'pointer',
                                    marginLeft: window.screen.width > 900 ? '-2em' : '0em',
                                    marginTop: window.screen.width > 900 ? '0em' : '-1em'
                                }}>{
                                        window.screen.width > 900 ? <EndSVG item={stepSelected(i)} title={step.title} /> : <EndSVGmobil item={stepSelected(i)} title={step.title} />
                                    }</div>
                            }
                            return <div onClick={() => clickStep(i)} key={i} style={{
                                cursor: 'pointer',
                                marginLeft: window.screen.width > 900 ? '-2em' : '0em',
                                marginTop: window.screen.width > 900 ? '0em' : '-1em'
                            }}>{
                                    window.screen.width > 900 ? <MiddleSVG item={stepSelected(i)} title={step.title} /> : <MiddleSVGmobil item={stepSelected(i)} title={step.title} />
                                }</div>
                        })
                    }
                </div>


                <div style={{
                    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '50em' : '45em') : '90vw',
                    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '8em') : '10em',
                    position: window.screen.width > 900 ? 'relative' : 'absolute',
                    bottom: window.screen.width > 900 ? (window.screen.width > 1536 ? '-15em' : '-11em') : '2em',
                    right: window.screen.width > 900 ? (window.screen.width > 1536 ? '-30em' : '-15em') : '5vw'
                }}>
                    <div style={{
                        width: '100%',
                        height: window.screen.width > 1536 ? '4em' :'3em', position: 'absolute', top: 0, right: 0, backgroundColor: '#7A4ADE', zIndex: 1, borderRadius: 10,
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <p style={{
                            fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '3em' : '2em') : '1.5em',
                            fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em'
                        }}>
                            {steps[activeStep].title}</p></div>
                    <div style={{
                        width:  '90%',
                        height: window.screen.width > 900 ? (window.screen.width > 1536 ? '16em' : '8em') : '10em',
                        position: 'absolute', top: 0,
                        right:'5%',
                        backgroundColor: 'rgb(255 255 255 / 10%)', zIndex: 0, borderRadius: 10,
                        display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '2.5em'
                    }}>
                        <p style={{
                            fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '2em' : '1.2em') : '1em',
                            fontWeight: 500, color: '#fff', margin: 0, lineHeight: '1.2em', width: '90%', marginTop: '1.5em',
                            textAlign:'center'
                        }}>
                            {steps[activeStep].description}</p>
                    </div>
                </div>

            </div>
            <GalaxyBg />
        </AppLayout >
    )
}