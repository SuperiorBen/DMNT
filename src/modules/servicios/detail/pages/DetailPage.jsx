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
import { cssMainDetail } from "../helpers/StyleDetail";
import Lottie from "lottie-react";
import planet from "../assets/planet.json";
import satelite from "../assets/satelite.json";
import astronaut from "../assets/astronaut.json";
import rocket from "../assets/rocket.json";
import { Button, Menu, MenuItem } from "@mui/material";

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

    const [activeStep, setStep] = useState(0)

    const clickStep = (val) => {
        setStep(val)
    }

    const stepSelected = (val) => {
        return activeStep == val ? cssMainDetail.isActive : cssMainDetail.notActive
    }


    // Menu control
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppLayout>
            {/* SEO */}
            <Helmet>
                <title>DMNT Creative Agency - {title}</title>
                <meta name="description" content="Inicio" />
            </Helmet>
            {/* SEO END =============================================================================== */}
            {/* Title and description */}
            <div style={cssMainDetail.mainContent}>
                <div style={{
                    marginTop: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : 'none') : '-2em',
                    display: 'flex', flexDirection: window.screen.width > 900 ? 'column' : 'row', justifyContent: 'center', alignItems: 'center'
                }}>
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
                                    return <div onClick={() => clickStep(i)} key={i} style={{ cursor: 'pointer' }}>
                                        {
                                            window.screen.width > 900 ? <BeginSVG item={stepSelected(i)} title={step.title} /> : <BeginSVGmobil item={stepSelected(i)} title={step.title} />
                                        }
                                    </div>

                                }
                                if (i == 4) {
                                    return <div onClick={() => clickStep(i)} key={i} style={cssMainDetail.contentBtn}>{
                                        window.screen.width > 900 ? <EndSVG item={stepSelected(i)} title={step.title} /> : <EndSVGmobil item={stepSelected(i)} title={step.title} />
                                    }</div>
                                }
                                return <div onClick={() => clickStep(i)} key={i} style={cssMainDetail.contentBtn}>{
                                    window.screen.width > 900 ? <MiddleSVG item={stepSelected(i)} title={step.title} /> : <MiddleSVGmobil item={stepSelected(i)} title={step.title} />
                                }</div>
                            })
                        }
                    </div>
                </div>

                {/* Info Step */}
                <div style={cssMainDetail.contentInfoStep}>
                    <div style={cssMainDetail.headerInfo}>
                        <p style={cssMainDetail.titleHeader}> {steps[activeStep].title}</p></div>
                    <div style={cssMainDetail.bodyInfo}>
                        <p style={cssMainDetail.textInfo}> {steps[activeStep].description}</p>
                    </div>
                </div>

            </div>

            <Lottie style={{
                position: 'fixed', zIndex: '2',
                width: window.screen.width > 900 ? (window.screen.width > 1536 ? '35em' : '25em') : '15em',
                top: window.screen.width > 900 ? (window.screen.width > 1536 ? '-4em' : '0em') : '8em',
                right: window.screen.width > 900 ? (window.screen.width > 1536 ? '1em' : '0em') : '2em',
            }} animationData={planet} />
            <Lottie style={{
                position: 'fixed', zIndex: '2',
                width: window.screen.width > 900 ? (window.screen.width > 1536 ? '15em' : '7em') : '8em',
                top: window.screen.width > 900 ? (window.screen.width > 1536 ? '1em' : '5em') : '0em',
                right: window.screen.width > 900 ? (window.screen.width > 1536 ? '50em' : '40em') : '5em',
            }} animationData={satelite} />
            <Lottie style={{
                position: 'fixed', zIndex: '3',
                width: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '5em') : '6em',
                top: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '15em',
                right: '5em'
            }} animationData={astronaut} />
            <Lottie style={{
                position: 'fixed', zIndex: '2',
                width: window.screen.width > 900 ? (window.screen.width > 1536 ? '30em' : '20em') : '10em',
                top: window.screen.width > 900 ? (window.screen.width > 1536 ? '28em' : '16em') : '37em',
                left: window.screen.width > 900 ? (window.screen.width > 1536 ? '20em' : '0em') : '0em',
                transform: 'rotateZ(90deg)'
            }} animationData={rocket} />
            <GalaxyBg />



            <div style={{
                position: 'fixed', zIndex: '10',
                top: '2em',
                left: '35em'
            }}>
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
                            textDecoration:'none',
                            fontWeight:700,
                            width:'100%',
                            textAlign:'center'
                        }}
                         href={item.url}>{item.title}</a></MenuItem>)
                    }

                </Menu>
            </div>
        </AppLayout >
    )
}