// Intro section
// Images
import stars from '../assets/animations/starsBg.json'
import astro from '../assets/animations/astro.json'
import scrollWhite from '../assets/animations/scroll-white.json'

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
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '12em' : '10em') : '7em'
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

// Style galaxy
const contentGalaxy = { width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, backgroundColor: '#171623', zIndex: 1 }
const blueLight = {
    background: 'radial-gradient(circle, rgb(7 193 236) 0%, rgba(9, 79, 116, 0.3) 35%, rgba(9, 79, 116, 0) 100%)', position: 'absolute', top: '-50vh', left: '15vw', zIndex: 2, borderRadius: '50%', width: '70vw', height: '100vh', boxShadow: 'rgb(6 204 255 / 20%) 2px 0px 500px'
}
const purpleLight = {
    background: 'radial-gradient(circle, rgba(154,35,235,1) 0%, rgba(154,35,235,0.5326505602240896) 35%, rgba(0,212,255,0) 100%)', position: 'absolute', zIndex: 2, borderRadius: '50%', height: '140vh', boxShadow: '2px 0px 500px #9a23eb75',
    top: '35vh', left: window.screen.width > 900 ? '5vw' : '-20vw',
    width: window.screen.width > 900 ? '90vw' : '140vw',
}
const galaxyStars = {
    position: 'absolute', zIndex: 3,
    width: window.screen.width > 900 ? '100vw' : '100vh',
    transform: window.screen.width > 900 ? 'rotateZ(0deg)' : 'rotateZ(90deg)',
    top: window.screen.width > 900 ? '0em' : '11em',
    left: window.screen.width > 900 ? '0em' : '-12em'
}

const scrollAnimated = {
    position: 'absolute', zIndex: 3, width:'5em', bottom:'0em', left:'calc( 50vw - 2.5em )'
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
    contentGalaxy,
    blueLight,
    purpleLight,
    galaxyStars,
    scrollAnimated,
    //========
    stars,
    astro,
    scrollWhite,
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