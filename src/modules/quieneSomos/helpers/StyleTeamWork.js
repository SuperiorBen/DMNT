// Images
import bgAnimated from '../assets/carnets/bgAnimated.webp'
import goat from '../assets/carnets/workteamSticker.webp'
import goatSmall from '../assets/carnets/workteamStickerSmall.webp'

const sticker = window.screen.width > 900 ? goat : goatSmall

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
import c8 from '../assets/carnets/normal/gafeteChriestian.webp'
import c7 from '../assets/carnets/normal/gafeteAndrea.webp'
import c6 from '../assets/carnets/normal/gafeteErika.webp'
import c5 from '../assets/carnets/normal/gafeteAlejandraBatrez.webp'
import c4 from '../assets/carnets/normal/gafeteAlejandraCortez.webp'
import c3 from '../assets/carnets/normal/gafeteGisel.webp'
import c2 from '../assets/carnets/normal/gafeteRojo.webp'
import c1 from '../assets/carnets/normal/gafeteRodrigoHernandez.webp'
import c8Small from '../assets/carnets/small/gafeteChriestianSmall.webp'
import c7Small from '../assets/carnets/small/gafeteAndreaSmall.webp'
import c6Small from '../assets/carnets/small/gafeteErikaSmall.webp'
import c5Small from '../assets/carnets/small/gafeteAlejandraBatrezSmall.webp'
import c4Small from '../assets/carnets/small/gafeteAlejandraCortezSmall.webp'
import c3Small from '../assets/carnets/small/gafeteGiselSmall.webp'
import c2Small from '../assets/carnets/small/gafeteRojoSmall.webp'
import c1Small from '../assets/carnets/small/gafeteRodrigoHernandezSmall.webp'

const carnet1 = window.screen.width > 900 ? c1 : c1Small
const carnet2 = window.screen.width > 900 ? c2 : c2Small
const carnet3 = window.screen.width > 900 ? c3 : c3Small
const carnet4 = window.screen.width > 900 ? c4 : c4Small
const carnet5 = window.screen.width > 900 ? c5 : c5Small
const carnet6 = window.screen.width > 900 ? c6 : c6Small
const carnet7 = window.screen.width > 900 ? c7 : c7Small
const carnet8 = window.screen.width > 900 ? c8 : c8Small

// CSS Variable
const carnetStyle = { width: window.screen.width > 900 ? (window.screen.width > 1536 ? '20em' : '14em') : '15em', height:'auto', marginLeft: '1em' }
const widthContent = window.screen.width > 900 ? (window.screen.width > 1536 ? '80em' : '65em') : '110em'

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