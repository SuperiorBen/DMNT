
// Info main component
// Styles
const containerBanner = {
    zIndex: 1,
    position: window.screen.width > 900 ? 'absolute' : 'relative',
    width: window.screen.width > 900 ? '60vw' : '100vw',
    top: window.screen.width > 900 ? '3em' : '-0.4em',
    right: window.screen.width > 900 ? '2vw' : 0
}
const marqueeBanner = {
    height: '5em', right: '0em', zIndex: 1, position: 'absolute', overflow: 'hidden',
    width: window.screen.width > 900 ? '60vw' : '100vw',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '27em' : '19.5em') : '78vh'
}
const titleBanner = { fontSize: window.screen.width > 900 ? '1.5em' : '1.5em', fontWeight: 500, margin: 0, color: '#9665FD' }
export const cssInfo = {
    containerBanner,
    marqueeBanner,
    titleBanner
}

// sub-components ==========================================================================
// AstroPose component
// Images
import astroPose from "../assets/img/astroPose.png";

// variables
const printedtimes = [1, 0.9, 0.8, 0.7, 0.6]
// css variables
const containerAstro = {
    backgroundImage: `url(${astroPose})`, backgroundPosition: 'center', backgroundOrigin: 'center', backgroundSize: 'cover', zIndex: 1, position: 'relative', overflow: 'hidden',
    borderRadius: window.screen.width > 900 ? '20px' : '10px 10px 0px 0px',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '30vw' : '35vw') : '98vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '75vh' : '90vh') : '60vh',
    left: window.screen.width > 900 ? '2vw' : '1vw',
    top: window.screen.width > 900 ? '3em' : '0.5em',
}
const innerImg = {
    boxShadow: 'rgb(150, 101, 253, 0.5) 2px 2px 2px',
    borderRadius: window.screen.width > 900 ? '20px' : '10px', position: 'absolute', transition: '0.5s linear',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '30vw' : '35vw') : '98vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '75vh' : '90vh') : '60vh'
}

export const cssAPose = {
    printedtimes,
    containerAstro,
    innerImg,
    //=======
    astroPose
}

// BannerTitle component 
// Images
import disk from "../assets/img/disk.png";
import diskText from "../assets/img/text.svg";

// css Variables
const purpleBanner = {
    backgroundColor: 'rgb(150, 101, 253,0.8)', zIndex: 1, position: 'absolute', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
    borderRadius: window.screen.width > 900 ? '20px' : '0px 0px 10px 10px',
    flexDirection: window.screen.width > 900 ? 'row' : 'column',
    top: window.screen.width > 900 ? '0em' : '1em',
    right: window.screen.width > 900 ? '0em' : '1vw',
    width: window.screen.width > 900 ? '60vw' : '98vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '26em' : '20em') : '75vh',
    fontSize: window.screen.width > 900 ? '1em' : '1.2em'
}
const titleContainer = {
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative',
    width: window.screen.width > 900 ? '20em' : '100%',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '1.7em' : '1.1em') : '1em',
    top: window.screen.width > 900 ? 0 : '2em'
}
const textBanner = {
    fontWeight: 700, lineHeight: '0.9em', color: '#fff', flexWrap: 'wrap', margin: '0em', textShadow: '#0000004d 0px 4px 4px', width: '100%', textAlign: 'center'
}

const diskContainer = {
    position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
    width: window.screen.width > 1536 ? '26em' : '20em',
    height: window.screen.width > 1536 ? '26em' : '20em',
}
const diskStyle = {
    position: 'absolute', marginTop: '2em',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '19em' : '14em') : '70%'
}
const diskLetters = {
    position: 'absolute',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '25em' : '18em') : '95%'
}
export const cssBanner = {
    purpleBanner,
    titleContainer,
    textBanner,
    diskContainer,
    diskStyle,
    diskLetters,
    // =============
    disk,
    diskText
}

// Gif Sliders
// Images
import dance from "../assets/gifs/dance.gif";
import mouth from "../assets/gifs/mouth.gif";
import triangle from "../assets/gifs/triangle.gif";
import purple from "../assets/gifs/purple.gif";
import ciclon from "../assets/gifs/ciclon.gif";

const gifList = [
    dance, mouth, triangle, purple, ciclon
]
// Styles
const parentContainer = {
    right: '0em', zIndex: 1, position: 'absolute',
    width: window.screen.width > 900 ? '60vw' : '100vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '12em' : '8em') : '10em',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '32em' : '24em') : '90vh'
}
const imgGifStyle = {
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '12em' : '8em') : '10em',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '12em' : '8em') : '10em',
    borderRadius: 15
}
const gifsContainer = {
    zIndex: 2, position: 'absolute', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', top: 0,
    width: window.screen.width > 900 ? '60vw' : '55em',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '12em' : '8em') : '10em',
    right: window.screen.width > 900 ? 0 : '-15em'
}
const purpleBlock = {
    backgroundColor: 'rgb(150, 101, 253,0.8)', position: 'absolute', zIndex: 1,
    width: window.screen.width > 900 ? '4em' : '90%',
    height: window.screen.width > 900 ? '10em' : '3em',
    bottom: window.screen.width > 900 ? '-4em' : '-1em',
    left: window.screen.width > 900 ? 0 : '5%'
}

export const cssGifs = {
    parentContainer,
    imgGifStyle,
    gifsContainer,
    purpleBlock,
    // =============
    gifList
}