import { AppLayout } from "../../../../layouts/AppLayout"
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { servicesDMNT } from "../helpers/infoServices";
import { useParams } from "react-router-dom";
import { GalaxyBg } from "../../../../layouts/utils/GalaxyBg";
import { BeginSVG, BeginSVGmobil } from "../components/stepsSVG/BeginSVG";
import { MiddleSVG, MiddleSVGmobil } from "../components/stepsSVG/MiddleSVG";
import { EndSVG, EndSVGmobil } from "../components/stepsSVG/EndSVG";
import { useState } from "react";
import { cssMainDetail } from "../helpers/StyleDetail";
import Lottie from "lottie-react";
import { Button, Menu, MenuItem } from "@mui/material";
import shareSeo from "../../../../assets/shareSeo.webp";
import Marquee from "react-fast-marquee";

import ReactGA from "react-ga4";



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

//Array menu
const optionsMenu = [
    {
        title: 'MARKETING DIGITAL',
        url: '/servicios/marketing-digital',
    },
    {
        title: 'SITIOS WEB / APLICACIONES',
        url: '/servicios/desarrollo-web-aplicaciones',
    },
    {
        title: 'AUDIOVISUALES',
        url: '/servicios/audiovisuales',
    },
    {
        title: 'MATERIAL POP',
        url: '/servicios/material-pop',
    }
]

export default function ServicioPage() {
    const { detail } = useParams();
    const serviceActive = showService(detail)
    const { title, subtitle, description, steps } = servicesDMNT[serviceActive]
    {/* Gtag */ }
    ReactGA.send({ hitType: "pageview", page: `/servicios/${detail}`, title: `Servicios ${title}` })

    const [activeStep, setStep] = useState(0)

    const clickStep = (val) => {
        setStep(val)
    }

    const stepSelected = (val) => {
        return activeStep == val ? cssMainDetail.isActive : cssMainDetail.notActive
    }

    // Menu control
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }


    return (
        <AppLayout>
            {/* SEO */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>DMNT Creative Agency - Servicios {title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={`https://test.dmnt.com.sv/servicios/${detail}`} />
                {/* Open graph */}
                <meta property="og:title" content={`DMNT Creative Agency - Servicios ${title}`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={shareSeo} />
                <meta property="og:image:width" content="369" />
                <meta property="og:image:height" content="300" />
                <meta name="robots" content="index, follow"></meta>
            </Helmet>
            {/* SEO END =============================================================================== */}
            {/* Title and description */}
            <div className="Main" style={cssMainDetail.mainContent}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.6, delay: 0.5, ease: 'easeIn' }}
                    style={cssMainDetail.overContentTitles}>
                    <div style={cssMainDetail.contentTitles}>
                        <div style={cssMainDetail.contentDescription}>
                            <p style={cssMainDetail.titleDescription}>{subtitle}</p>
                            <p style={cssMainDetail.descriptionTitle}>{description}</p>
                        </div>
                        <p style={cssMainDetail.mainTitle}>{title}</p>
                    </div>


                    <div style={cssMainDetail.contentSteps}>
                        {
                            steps.map((step, i) => {
                                if (i == 0) {
                                    return <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.6, delay: i + 1, ease: 'easeIn' }}
                                        onClick={() => clickStep(i)} key={i} style={{ cursor: 'pointer' }}>
                                        {
                                            window.screen.width > 900 ? <BeginSVG item={stepSelected(i)} title={step.title} /> : <BeginSVGmobil item={stepSelected(i)} title={step.title} />
                                        }
                                    </motion.div>

                                }
                                if (i == 4) {
                                    return <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.6, delay: i + 1, ease: 'easeIn' }}
                                        onClick={() => clickStep(i)} key={i} style={cssMainDetail.contentBtn}>{
                                            window.screen.width > 900 ? <EndSVG item={stepSelected(i)} title={step.title} /> : <EndSVGmobil item={stepSelected(i)} title={step.title} />
                                        }</motion.div>
                                }
                                return <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.6, delay: i + 1, ease: 'easeIn' }}
                                    onClick={() => clickStep(i)} key={i} style={cssMainDetail.contentBtn}>{
                                        window.screen.width > 900 ? <MiddleSVG item={stepSelected(i)} title={step.title} /> : <MiddleSVGmobil item={stepSelected(i)} title={step.title} />
                                    }</motion.div>
                            })
                        }
                    </div>
                </motion.div>

                {/* Info Step */}
                <motion.div
                    initial={{ opacity: 0, y: '5vh' }}
                    whileInView={{ opacity: [0, 1], y: ['5vh', '0vh'] }}
                    transition={{ duration: 1, delay: 1.5 }}
                    style={cssMainDetail.contentInfoStep}>
                    <div style={cssMainDetail.headerInfo}>
                        <p style={cssMainDetail.titleHeader}> {steps[activeStep].title}</p></div>
                    <div style={cssMainDetail.bodyInfo}>
                        <p style={cssMainDetail.textInfo}> {steps[activeStep].description}</p>
                    </div>
                </motion.div>
            </div>

            <Lottie style={cssMainDetail.planetAnimate} animationData={cssMainDetail.planet} />
            <Lottie style={cssMainDetail.sateliteAnimate} animationData={cssMainDetail.satelite} />
            <Lottie style={cssMainDetail.astronautAnimate} animationData={cssMainDetail.astronaut} />
            <Marquee speed={35} direction="right" style={cssMainDetail.marqueeCss}>
                <Lottie style={cssMainDetail.rocketAnimate} animationData={cssMainDetail.rocket} /></Marquee>
            <GalaxyBg />

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: [1.3, 0.9, 1] }}
                transition={{ duration: 0.6, delay: 1 }}
                style={cssMainDetail.btnMoreContent}>
                <Button
                    color="info"
                    style={{ fontSize: '1.2em', fontWeight: 700, color: '#fff' }}
                    id="basic-button"
                    variant="outlined"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    VER MÁS SERVICIOS
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        optionsMenu.map((item, i) => <MenuItem key={i} ><a style={{
                            textDecoration: 'none',
                            fontWeight: 700,
                            width: '100%',
                            textAlign: 'center'
                        }}
                            href={item.url}>{item.title}</a></MenuItem>)
                    }

                </Menu>
            </motion.div>
        </AppLayout >
    )
}