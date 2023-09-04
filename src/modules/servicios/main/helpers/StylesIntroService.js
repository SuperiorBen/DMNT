// Intro section
// Images
import astro from '../assets/animations/astro.json'

import aplicaciones from "../assets/iconosServicios/Aplicaciones.svg";
import audiovisuales from "../assets/iconosServicios/AudioVisuales.svg";
import bellowtheline from "../assets/iconosServicios/BellowTheLine.svg";

import branding from "../assets/iconosServicios/Branding.svg";
import diseniografico from "../assets/iconosServicios/DisenioGrafico.svg";
import ecomerce from "../assets/iconosServicios/Ecomerce.svg";

import fotografia from "../assets/iconosServicios/Fotografia.svg";
import manejocampanias from "../assets/iconosServicios/ManejoCampanias.svg";
import modelado3d from "../assets/iconosServicios/Modelado3d.svg";

import relacionespublicas from "../assets/iconosServicios/RelacionesPublicas.svg";
import sitiosweb from "../assets/iconosServicios/SitiosWeb.svg";
import socialmedia from "../assets/iconosServicios/SocialMedia.svg";

// Styles icons
const contentBgIcons = {
    width: '100vw', height: '100vh', position: 'fixed', zIndex: 2, left: 0, display: 'flex', transition:'0.5s linear',
    justifyContent: window.screen.width > 900 ? 'space-evenly' : 'center',
    alignItems: 'center', flexDirection: window.screen.width > 900 ? 'row' : 'column'
}

const contentIcons = {
    transition: '1s ease-in-out', position: 'relative', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center',
    height: window.screen.width > 900 ? '70vh' : 'auto',
    width: window.screen.width > 900 ? 'auto' : '100vw',
    flexDirection: window.screen.width > 900 ? 'column' : 'row'
}

const itemStyle = {
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
    margin: window.screen.width > 900 ? '0em' : '2em 0em'
}
const imgItem = {
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '12em' : '10em') : '7em',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '5em' : '4em') : '3em'
}
const titleItem = {
    fontWeight: 700, margin: '0em', color: '#fff',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '1.5em' : '1em') : '0.8em'
}

// Styles title and astronaut
const contentTitle = {
    transition: '1s ease-in-out', width: '100vw', height: '100vh', position: 'fixed', zIndex: 3,
    top: 0, left: 0, display: 'flex', flexDirection: window.screen.width > 900 ? 'row' : 'column-reverse', justifyContent: 'center', alignItems: 'center'
}
const mainTitle = {
    color: '#fff', fontWeight: 700, width: '5.5em', display: 'flex', flexWrap: 'wrap', lineHeight: '0.9em', justifyContent: 'center', alignItems: 'center',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '4em'
}
const astroIcon = {
    width: '20em', position: 'relative',
    marginLeft: window.screen.width > 900 ? '-2em' : '2em',
    marginBottom: window.screen.width > 900 ? '0em' : '-5em'
}



export const cssIntro = {
    contentBgIcons,
    contentIcons,
    itemStyle,
    imgItem,
    titleItem,
    contentTitle,
    mainTitle,
    astroIcon,
    //========
    astro,
    aplicaciones,
    audiovisuales,
    bellowtheline,
    branding,
    diseniografico,
    ecomerce,
    fotografia,
    manejocampanias,
    modelado3d,
    relacionespublicas,
    sitiosweb,
    socialmedia
}