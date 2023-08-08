// Background animate =================================================================================================================
// Images
import bgBuilt1 from "../assets/Fbuild.svg"
import bgBuilt2 from "../assets/Sbuild.svg"
import bgBuilt3 from "../assets/Tbuild.svg"
import billboard from "../assets/billboard.png"

// css variables 
const widthBilboard = window.screen.width > 900 ? (window.screen.width > 1536 ? '40em' : '22em') : '15em'

//Styles
const marquee3 = { position: 'fixed', zIndex: 1, width: '100vw', bottom: '0em', userSelect: 'none' }
const build3 = { width: window.screen.width > 900 ? '100vw' : '250vw' }
const marquee2 = { position: 'fixed', zIndex: 2, width: '100vw', bottom: '-3em', userSelect: 'none' }
const build2 = { width: window.screen.width > 900 ? '80vw' : '180vw' }
const marquee1 = { position: 'fixed', zIndex: 4, width: '100vw', bottom: window.screen.width > 900 ? '-6em' : '-3em', userSelect: 'none' }
const build1 = { width: window.screen.width > 900 ? '80vw' : '160vw' }
const billboardImg = {
    position: 'fixed', zIndex: 3, width: widthBilboard, bottom: '1em', left: window.screen.width > 900 ? '5%' : `calc( 50vw - ${widthBilboard} / 2 )`, userSelect: 'none'
}

export const cssBgBuild = {
    marquee3,
    build3,
    marquee2,
    build2,
    marquee1,
    build1,
    billboardImg,
    //======================
    bgBuilt1,
    bgBuilt2,
    bgBuilt3,
    billboard
}

//Ovni animate ======================================================================================================================
// Images
import ovni from "../assets/animations/ovni.json"
import man from "../assets/manFloat.svg"
import lightPurple from "../assets/lighPurple.svg"

// Styles
const manFloat = {
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '5.5em', position: 'fixed', zIndex: 6,
    right: window.screen.width > 900 ? (window.screen.width > 1536 ? '15em' : '12em') : '4em', userSelect: 'none'
}
const lightMove = {
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '40em' : '30em') : '35em', position: 'fixed', zIndex: 5,
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '7em') : '5em',
    right: window.screen.width > 900 ? (window.screen.width > 1536 ? '-2em' : '0em') : '-11em',
    transformOrigin: 'top center', userSelect: 'none'
}
const ovniMove = {
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '20em' : '12em') : '10em', position: 'fixed', zIndex: 6, top: window.screen.width > 900 ? '2em' : '0.2em',
    right: window.screen.width > 900 ? '8em' : '0.6em', userSelect: 'none'
}

export const cssOvni = {
    manFloat,
    lightMove,
    ovniMove,
    //===============
    ovni,
    man,
    lightPurple
}


// Group cards ======================================================================================================================
// Animations
import phone from "../assets/animations/phone.json"
import whatsapp from "../assets/animations/whatsapp.json"
import instagram from "../assets/animations/instagram.json"
import facebook from "../assets/animations/facebook.json"
import email from "../assets/animations/mail.json"
import locationIcon from "../assets/animations/location.json"

// Styles
const contentCards = {
    position: 'fixed', top: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '2em') : '8em',
    left: window.screen.width > 900 ? (window.screen.width > 1536 ? 'calc( 60vw - 20em / 2 )' : 'calc( 60vw - 15em / 2 )') : '1em',
    zIndex: 6, display: 'flex', flexDirection: 'column'
}

export const cssGroupC = {
    contentCards,
    //===========
    phone,
    whatsapp,
    instagram,
    facebook,
    email,
    locationIcon
}

// item card ======================================================================================================================
//Images
import texture from "../assets/cardTexture.png"

// Styles
const contentCard = { width: window.screen.width > 1536 ? '20em' : '15em', position: 'relative', transition: '0.6s' }
const titleCard = {
    display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', cursor: 'pointer', userSelect: 'none', position: 'absolute', zIndex: 2,
    backgroundImage: `url(${texture})`, backgroundPosition: 'center', backgroundSize: '150%', borderRadius: '5px', boxSizing: 'border-box', height: window.screen.width > 1536 ? '4em' : '3em', padding: '0.5em 1em'
}
const icon = { width: window.screen.width > 1536 ? '3.5em' : '2.5em', height: window.screen.width > 1536 ? '3.5em' : '2.5em' }
const titleText = { margin: '0em', fontWeight: 700, color: '#9565fdd5', fontSize: window.screen.width > 1536 ? '1.5em' : '1em', lineHeight: '1em' }
const linkText = {
    display: 'flex', justifyContent: 'center', alignContent: 'center', margin: '0em', lineHeight: '1em', fontWeight: 700, color: '#fff', textShadow: '1px 1px 0px rgb(0 0 0 / 31%)',
    width: '100%', background: 'linear-gradient(90deg, rgba(150,101,253,0.8) 0%, rgba(8,199,209,0.25) 100%)', backgroundColor: '#fff',
    borderRadius: '3px', position: 'relative', zIndex: 1, transition: '0.5s', textDecoration: 'none', fontSize: window.screen.width > 1536 ? '1.5em' : '1em', height: '2em', padding: '0.5em'
}

export const cssItemC = {
    contentCard,
    titleCard,
    icon,
    titleText,
    linkText
}

// Tittle message =================================================================================================================

// css variables
const widthTitle = window.screen.width > 900 ? (window.screen.width > 1536 ? '30em' : '15em') : '80%'

// styles
const contentTitle = {
    display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: 2, width: widthTitle,
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? 'calc( 40vh - 15em / 2 )' : `calc( 40vh - 7em / 2 )`) : '27em',
    left: window.screen.width > 900 ? (window.screen.width > 1536 ? `calc( 35vw - ${widthTitle} / 2 )` : `calc( 40vw - ${widthTitle} / 2 )`) : `calc( 50vw - ${widthTitle} / 2 )`, userSelect: 'none'
}
const lineTiny = {
    padding: '0.5em 0em', margin: '0em', lineHeight: '1em', textAlign: 'center', background: '#9565fdd5', color: '#fff', fontWeight: 700, borderRadius: '5px', fontSize: window.screen.width > 1536 ? '2em' : '1em'
}

const lineBig = {
    margin: '0em', lineHeight: '0.9em', textAlign: 'center', color: '#9565fdd5', fontWeight: 700, fontSize: window.screen.width > 1536 ? '10em' : '5em'
}

const marqueeOvni = { position: 'fixed', zIndex: 3, width: '100vw', bottom: '20vh', userSelect: 'none' }
const crazyOvni = { width: window.screen.width > 1536 ? '8em' : '5em', userSelect: 'none' }

export const cssTMessage = {
    contentTitle,
    lineTiny,
    lineBig,
    marqueeOvni,
    crazyOvni,
    //======
    ovni
}