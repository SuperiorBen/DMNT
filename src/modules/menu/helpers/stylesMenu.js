import { lazy } from 'react'

const QuienesSomosMenu = lazy(() => import('../components/QuienesSomosMenu'))
const ServicioMenu = lazy(() => import('../components/ServicioMenu'))
const ContactoMenu = lazy(() => import('../components/ContactoMenu'))

// Styles
// Togle btn
const contentToggle = {
    position: 'fixed',
    top: '1em',
    left: '1em',
    zIndex: 999,
    width: '12em',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backdropFilter: 'blur(2px)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '0.8em',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0,0,0,0.1)'
}

const btnStyle = {
    borderRadius: '0em',
    border: '3px solid #fff',
    width: '3em',
    height: '3em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '0.3em',
    paddingBottom: '0.3em',
    cursor: 'pointer',
    marginRight: '0.5em'
}
const pathLine = {
    backgroundColor: '#fff',
    width: '1.5em',
    height: '0.2em',
    borderRadius: 5
}

// Menu viewport
const contentBg = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
}

const bgSection = {
    backgroundColor: '#322aa4',
    width: '100vw',
    height: '50vh',
    position: 'absolute',
    top: 0
}

const menuSection = {
    position: 'absolute',
    top: '7em',
    left: '6%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 991,
    width: window.screen.width > 900 ? 'calc( 50% - 10vw )' : '100%'
}

const imageSection = {
    position: 'absolute',
    top: window.screen.width > 900 ? '0vh' : '35vh',
    left: window.screen.width > 900 ? '50vw' : '0vw',
    zIndex: 991,
    width: window.screen.width > 900 ? '50vw' : '100vw',
    height: window.screen.width > 900 ? '100vh' : '65vh',
    overflow: 'hidden'
}

const marqueContent = {
    width: '100vw',
    height: '4em',
    position: 'absolute',
    rotate: window.screen.width > 900 ? '-90deg' : '0deg',
    top: '0',
    left: window.screen.width > 900 ? '-47.5vw' : '0',
    zIndex: 1,
    backgroundColor: '#322aa4'
}

const marqueStyle = {
    height: '4em',
    width: '102vw',
    border: '1px solid #fff',
    position: 'relative',
    top: '0',
    left: window.screen.width > 900 ? '-40vw' : '0vw'
}

const imgContent = {
    width: window.screen.width > 900 ? 'calc( 50vw - 4em )' : '100vw',
    height: window.screen.width > 900 ? '100vh' : 'calc( 65vh - 4em )',
    backgroundColor: '#fff',
    position: 'absolute',
    top: window.screen.width > 900 ? '0' : '4em',
    right: '0',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
}

const pTitle = {
    fontFamily: `'Courier Prime', monospace`, fontSize: 'calc( 1.2vw + 0.8em )', color: '#fff', fontWeight: '100', lineHeight: '1em', width: '15em', textShadow: '2px 2px 2px #000000b8',
    position: 'absolute', left: '1em', top: '1em'
}


// =========================================================================================================
// Variants for animations
const btnVariants = {
    open: { rotate: 45, y: 6 },
    open2: { rotate: -45, y: -6 },
    closed: { rotate: 0 }
}

const bgSectionVariants = {
    closed: { x: '100vw' },
    closed2: { x: '-100vw' },
    open: { x: '0vw' }
}
const menuVariants = {
    closed: { x: '100vw', opacity: 0 },
    closed2: { x: '-100vw', opacity: 0 },
    open: { x: '0vw', opacity: 1 }
}

const textVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
}


const imgContacto = {
    marginBottom: window.screen.width > 900 ? (window.screen.width > 1536 ? '30%' : '20%') : '30%',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '20em' : '12em') : '8em',
    width: '100%',
}

const imgQS = {
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '45em' : '25em') : '22em',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '80%' : '70%') : '90%'
}

const imgServicio = {
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '36em' : '22em') : '25em',
    width: window.screen.width > 900 ? '100%' : '150%'
}


export const cssMenu = {
    contentToggle,
    btnStyle,
    pathLine,
    contentBg,
    bgSection,
    menuSection,
    imageSection,
    marqueContent,
    marqueStyle,
    imgContent,
    pTitle,
    imgContacto,
    imgQS,
    imgServicio,
    // Variants animations
    btnVariants,
    bgSectionVariants,
    menuVariants,
    textVariants
}

export const optionMenu = [
    { id: 0, text: '¿QUIÉNES SOMOS?', url: '/quienesSomos', component: QuienesSomosMenu },
    { id: 1, text: 'SERVICIOS', url: '/servicios', component: ServicioMenu },
    { id: 2, text: 'CONTACTO', url: '/contacto', component: ContactoMenu },
]