// Tarjetas Quienes Somos
// Images
import logoDmnt from '../../../assets/logoFull.svg'
import sitAstronaut from '../assets/tarjetas/sitAstronaut.webp'
import flyAstronaut from '../assets/tarjetas/psyco-halo.webp'
import world from '../assets/tarjetas/world.png'
import glitchAstronaut from '../assets/tarjetas/psyco-astro.gif'
import chunk1 from '../assets/tarjetas/chunksVision/chunk-1.webp'
import chunk2 from '../assets/tarjetas/chunksVision/chunk-2.webp'
import chunk3 from '../assets/tarjetas/chunksVision/chunk-3.webp'
import chunk4 from '../assets/tarjetas/chunksVision/chunk-4.webp'
import chunk5 from '../assets/tarjetas/chunksVision/chunk-5.webp'
import chunk6 from '../assets/tarjetas/chunksVision/chunk-6.webp'

// Css variable
const chunkStyle = { height: '8em', borderRadius: '5px', opacity: 0.8, margin: '0em 1.5em', boxShadow: '0px 0px 2px rgba(150, 101, 253, 0.8), 0px 0px 10px rgba(150, 101, 253, 0.3)' }

// Styles
const contentCards = { height: '100vh', width: window.screen.width > 900 ? `calc(100vw - 29em)` : '100vw', position: 'fixed', top: 0, right: 0, zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }
const card1Logo = { width: '10em', height: '4em', position: 'absolute', bottom: window.screen.width > 900 ? '16em' : '20em', left: '5%' }
const astroGlitch = { width: '10em', height: '20em', position: 'absolute', bottom: '-1em', left: 'calc( 50% - 5em )' }

const astroSit = { width: '75%', margin: '3em', position: 'absolute', bottom: '-5em', left: '-5em', zIndex: 2 }

const card3Content = { width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'end', position: 'absolute', top: 0 }
const astroFly = { height: '60%', margin: 'auto', marginBottom: '2em', position: 'absolute', zIndex: 1 }
const dmntWorld = { width: window.screen.width > 900 ? '50vw' : '200vw', margin: 'auto', opacity: 0.9, position: 'absolute', zIndex: 0, bottom: window.screen.width > 900 ? '-25vw' : '-100vw' }

export const cssCardsQS = {
    chunkStyle,
    contentCards,
    card1Logo,
    astroGlitch,
    astroSit,
    card3Content,
    astroFly,
    dmntWorld,
    // =================
    logoDmnt,
    sitAstronaut,
    flyAstronaut,
    world,
    glitchAstronaut,
    chunk1,
    chunk2,
    chunk3,
    chunk4,
    chunk5,
    chunk6
}

// Tarjeta contenedor
import bgQuienesSomos from '../assets/tarjetas/psyco-patron2.webp'
import bgVision from '../assets/tarjetas/bgVision.webp'
import bgMision from '../assets/tarjetas/bgMision.webp'
import bubblePurple from '../assets/tarjetas/bubblePurple.svg'
import bubbleBlue from '../assets/tarjetas/bubbleBlue.svg'
import iconQuienesSomos from '../assets/tarjetas/iconQuienesSomos.webp'
import iconVision from '../assets/tarjetas/iconVision.webp'
import iconMision from '../assets/tarjetas/iconMision.webp'

const cardContainer = {
    margin: 'auto', marginTop: window.screen.width > 900 ? 'none' : '8em', width: window.screen.width > 900 ? '25em' : '90vw', height: window.screen.width > 900 ? '95vh' : '80vh',
    maxHeight: '720px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '5px', boxShadow: '3px 3px 5px #00000061',
    position: 'absolute', overflow: 'hidden', transition: 'opacity 0.5s ease-in-out'
}

const cssBBlue = { width: "5em", position: 'absolute', top: 80, left: 50 }
const cssBPurple = { width: "6em", position: 'absolute', top: 40, right: 90 }
const contentTitle = {
    backdropFilter: 'blur(2px)', background: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)', borderRadius: '10px', boxShadow: '2px 2px 2px rgba(0,0,0,0.1)',
    width: '95%', margin: 'auto', marginTop: '1em', padding: '1em 0.5em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
}
const title = { color: '#fff', margin: 0, fontSize: '1.8em', fontWeight: 600, lineHeight: '1em', width: '100%', textAlign: 'center' }
const contentInfo = { width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '0.5em' }
const textInfo = { color: '#fff', margin: 0, fontSize: '1em', fontWeight: 400, lineHeight: '1.3em', width: 'calc( 90% - 7em )' }

export const cssCardContainer = {
    cardContainer,
    cssBBlue,
    cssBPurple,
    contentTitle,
    title,
    contentInfo,
    textInfo,
    //====================
    bgQuienesSomos,
    bgVision,
    bgMision,
    bubblePurple,
    bubbleBlue,
    iconQuienesSomos,
    iconVision,
    iconMision
}