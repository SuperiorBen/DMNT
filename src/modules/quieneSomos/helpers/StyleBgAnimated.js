const xTwister = window.screen.width > 900 ? `calc(100vw - 29em)` : `calc(100vw - (27em - 14em))`
const sizeAniText = window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '5em'

// Imagenes
import bgCreativa from "../assets/background/bgTeamWork.png"
import bgTwist from "../assets/background/psycoTwister.svg"
import bgStars from "../assets/stars-bg.webp"
// Animation JSON
import scrollarrow from "../assets/background/animations/scrollarrow.json"

// CSS Variables 
const backgroundContent = { height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 0 }

const progressBar = { position: 'fixed', height: '8px', bottom: 0, left: 0, right: 0, zIndex: 99, background: '#94CED9', transformOrigin: '0%' }

const imgCreativa = { height: '100vh', width: window.screen.width > 900 ? '29em' : '27em', position: 'absolute', top: 0, left: window.screen.width > 900 ? "0em" : "-14em", zIndex: 1, mixBlendMode: 'multiply' }

const contentTwister = { height: '100vh', width: xTwister, position: 'absolute', top: 0, zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }
const twisterImage = { height: window.screen.width > 900 ? '200%' : '120%' }

const contentText = { height: '100vh', width: xTwister, position: 'absolute', top: 0, zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column-reverse', overflow: 'hidden', writingMode: window.screen.width > 900 ? 'horizontal-tb' : 'vertical-lr', textOrientation: 'mixed' }
const textAnimated = { margin: '0px', fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: sizeAniText, lineHeight: '1em', WebkitTextStroke: 'rgb(150 101 253 / 60%) 2px', color: 'transparent', userSelect: 'none' }

const lottieAnimation = { position: 'absolute', left: window.screen.width > 900 ? '-1.5em' : '-1em', bottom: 0, height: window.screen.width > 900 ? '20%' : '10%' }
const bgStarsImg = { height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.2 }

export const cssBgAnimated = {
    backgroundContent,
    progressBar,
    imgCreativa,
    xTwister,
    sizeAniText,
    contentTwister,
    twisterImage,
    contentText,
    textAnimated,
    lottieAnimation,
    bgStarsImg,
    // ========================
    bgCreativa,
    bgTwist,
    bgStars,
    // ========================
    scrollarrow
}