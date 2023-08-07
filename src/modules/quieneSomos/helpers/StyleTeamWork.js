// Images
import bgAnimated from '../assets/carnets/bgAnimated.webp'
import sticker from '../assets/carnets/workteamSticker.png'

// CSS variables
const sizeAniText = window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '8em') : '6em'
const sizeAniText2 = window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '5em'

// Styles
const contentTeam = { height: '100vh', width: window.screen.width > 900 ? `calc(100vw - 29em)` : '100vw', position: 'fixed', right: 0, zIndex: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }

const contentTitle = { position: 'absolute', right: window.screen.width > 900 ? '20vw' : '0.5em', display: 'flex', flexDirection: window.screen.width > 900 ? 'column' : 'column-reverse', justifyContent: 'center', alignItems: window.screen.width > 900 ? 'flex-end' : 'flex-start', top: window.screen.width > 900 ? '2em' : '20vh', transition: '1s ease-in-out', transitionDelay: '2s', writingMode: window.screen.width > 900 ? 'horizontal-tb' : 'vertical-lr', textOrientation: 'mixed' }
const pTitle = { fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: sizeAniText, lineHeight: '0.8em', WebkitTextStroke: 'rgb(150 101 253 / 90%) 2px', color: 'transparent', userSelect: 'none', margin: 0, WebkitBackgroundClip: 'text', backgroundImage: `url(${bgAnimated})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }
const pTitle2 = { fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: sizeAniText2, lineHeight: '0.8em', color: 'rgb(150 101 253 / 90%)', userSelect: 'none', margin: 0 }
const stickerGoat = { width: window.screen.width > 900 ? '15vw' : '40vw', height: window.screen.width > 900 ? '27vh' : '18vh', position: 'absolute', transition: '1s ease-in-out', transitionDelay: '1.5s' }

const divContentCarnets = { width: window.screen.width > 900 ? `calc(100vw - 29em)` : '100vw', overflow: 'hidden', position: 'absolute', bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', transition: '1s ease-in-out', transitionDelay: '1.5s' }


export const cssTeamWork = {
    contentTeam,
    contentTitle,
    pTitle,
    pTitle2,
    stickerGoat,
    divContentCarnets,
    //============
    sticker
}

// Carnets

// Images
import carnet8 from '../assets/carnets/gafeteChriestian.png'
import carnet7 from '../assets/carnets/gafeteAndrea.png'
import carnet6 from '../assets/carnets/gafeteErika.png'
import carnet5 from '../assets/carnets/gafeteAlejandraBatrez.png'
import carnet4 from '../assets/carnets/gafeteAlejandraCortez.png'
import carnet3 from '../assets/carnets/gafeteGisel.png'
import carnet2 from '../assets/carnets/gafeteRojo.png'
import carnet1 from '../assets/carnets/rodrigoHernandez.png'

// CSS Variable
const carnetStyle = { width: window.screen.width > 900 ? (window.screen.width > 1536 ? '20em' : '15em') : '15em', marginLeft: '1em' }
const widthContent = window.screen.width > 900 ? (window.screen.width > 1536 ? '80em' : '80em') : '110em'

// Styles
const contentCarnets = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: widthContent }

export const cssCarnets = {
    carnetStyle,
    widthContent,
    contentCarnets,
    //================
    carnet1,
    carnet2,
    carnet3,
    carnet4,
    carnet5,
    carnet6,
    carnet7,
    carnet8
}