// Link card component 
// Images
import avatar from "../assets/animations/lic.json";
import arrow from "../assets/multimediaForm/rightArrow.svg";

// Variable
const contentCard = {
    position: 'relative', zIndex:3,
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '30vw' : '40vw') : '100vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '30em' : '22em') : '22em'
}
const contentTitle = {
    position: 'absolute', zIndex:2, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', borderRadius: '5px',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '30vw' : '40vw') : '100vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '14em' : '14em') : '13em',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? 'calc( 40% - 7em )' : 'calc( 40% - 7em )') : 'calc( 40% - 7em )'
}
const texts = {
    position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    paddingLeft: window.screen.width > 900 ? (window.screen.width > 1536 ? 'none' : '2em') : '0.6em',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '8em') : '7em'
}
const titleFormat = { fontWeight: 700, margin: 0, lineHeight: '1em', color: '#9665FD' }
const titleTiny = {
    ...titleFormat, width: '15em',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '2em' : '1.8em') : '1.5em',
}
const titleBig = {
    ...titleFormat,
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '4em' : '3.5em') : '3em',
}
const buttonContact = {
    borderRadius: '5px',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '3em' : '3em') : '3em',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '23em' : '20em') : '16em',
    marginLeft: window.screen.width > 900 ? (window.screen.width > 1536 ? 'none' : '2em') : '0.6em',
    textDecoration: 'none',
    position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.2s ease-in-out 0s',
}
const buttonText = { transition: '1s', color: '#fff', fontSize: '1.2em', fontWeight: 700, textShadow: '1px 1px 2px #9665FD', width: '8em' }
const arrowCss = { position: 'absolute', top: '0.5em', width: '2em', height: '2em', transition: '1s', }

const avatarAnimate = {
    position: 'relative', zIndex: 1,
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '14em' : '10em') : '10em',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '30em' : '22em') : '22em',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '0em' : '-1em') : '-2em',
    left:  window.screen.width > 900 ? (window.screen.width > 1536 ? 'calc( 30vw - 14em )' : 'calc( 40vw - 10em )') : 'calc( 100vw - 10em )',
}
const bgBlur = {
    background: 'linear-gradient(360deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 100%)',
    backdropFilter: 'blur(5px)', position: 'absolute', top: 0, left: 0,
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '30vw' : '40vw') : '100vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '18em' : '18em') : '12em', zIndex: 1
}
const blobAnimate = {
    position: 'absolute', top: '-1em',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '22em' : '18em') : '15em',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '16em' : '14em') : '12em',
    right: window.screen.width > 900 ? (window.screen.width > 1536 ? 'calc( ( 30vw - 22em ) / 2 )' : 'calc( ( 40vw - 18em ) / 2 )') : '5em', zIndex: 0,
}

export const cssLinkCard = {
    avatar,
    arrow,
    // =============
    contentCard,
    contentTitle,
    texts,
    titleTiny,
    titleBig,
    buttonContact,
    buttonText,
    arrowCss,
    avatarAnimate,
    bgBlur,
    blobAnimate
}

// Steps process component 
// Images
import number1 from "../assets/multimediaForm/number1.svg";
import number2 from "../assets/multimediaForm/number2.svg";
import number3 from "../assets/multimediaForm/number3.svg";
// Animations
import img1 from "../assets/animations/listen.json";
import img2 from "../assets/animations/forty.json";
import img3 from "../assets/animations/winning.json";

const listAnimate = [
    { img: img1, animate: number1 },
    { img: img2, animate: number2 },
    { img: img3, animate: number3 },
]

// Variables
const contentMain = {
    position: 'relative', overflowX: window.screen.width > 900 ? 'hidden' : 'visible',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '40vw' : '60vw') : '100vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '23em' : '23em') : 'auto',
    marginTop: window.screen.width > 900 ? '0em' : '-4em'
}
const contentButtons = {
    position: 'absolute', width: '8em', height: '2em', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', zIndex: 1,
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '0em' : '1em') : '-2em',
    right: window.screen.width > 900 ? (window.screen.width > 1536 ? 'calc( ( 40vw - 4em ) / 2 )' : 'calc( ( 60vw - 4em )  / 2 )') : 'calc( (100vw - 4em) / 2)'
}
const btnStyle = { width: '1.5em', border: '2px solid #9665FD', cursor: 'pointer', transition: '0.2s linear' }
const animationContent = {
    position: 'relative', zIndex: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', transition: '1s ease-in-out',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '120vw' : '180vw') : '300vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '22em' : '22em') : 'auto',
    justifyContent: window.screen.width > 900 ? 'flex-start' : 'center'
}
const divAnimate = {
    position: 'relative', display: 'flex',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '40vw' : '60vw') : '100vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '22em' : '22em') : 'auto',
    flexDirection: window.screen.width > 900 ? 'row' : 'column',
    justifyContent: 'center', alignItems: window.screen.width > 900 ? 'center' : 'flex-start'
}
const lottieAnimate = {
    position: 'relative', zIndex: 1, marginTop: '-2em',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '20vw' : '30vw') : '100vw',
}
const stepImage = {
    position: 'relative', zIndex: 0,
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '20vw' : '30vw') : '90vw',
    marginLeft: window.screen.width > 900 ? '-2em' : '5vw',
    marginTop: window.screen.width > 900 ? '0em' : '-2em'
}


export const cssStepsPro = {
    listAnimate,
    contentMain,
    contentButtons,
    btnStyle,
    animationContent,
    divAnimate,
    lottieAnimate,
    stepImage
}