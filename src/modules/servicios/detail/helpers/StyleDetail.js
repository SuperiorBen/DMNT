// Json animations
import planet from "../assets/planet.json";
import satelite from "../assets/satelite.json";
import astronaut from "../assets/astronaut.json";
import rocket from "../assets/rocket.json";
// Main detail
// buttons steps styles
const isActive = {
    fillColor: '#9665FD',
    fillBorderColor: '#9665FD',
    opacityColor: '1',
    opacityBorderColor: '1'
}
const notActive = {
    fillColor: '#fff',
    fillBorderColor: '#fff',
    opacityColor: '0.1',
    opacityBorderColor: '0.4'
}

// Css variables
const mainContent = {
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'absolute', top: 0, left: 0, zIndex: 3, display: 'flex', width: '100vw', height: '100vh',
    justifyContent: 'center', overflow: 'hidden',
    alignItems: window.screen.width > 900 ? 'center' : 'flex-start',
}

// Title and description
const overContentTitles = {
    marginTop: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : 'none') : '-2em',
    display: 'flex', flexDirection: window.screen.width > 900 ? 'column' : 'row', justifyContent: 'center', alignItems: 'center'
}
const contentTitles = {
    display: 'flex', position: 'relative',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '80vw' : '80vw') : '60vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '16em' : '16em') : 'auto',
    flexDirection: window.screen.width > 900 ? 'row' : 'column-reverse',
    justifyContent: window.screen.width > 900 ? 'center' : 'flex-end',
    alignItems: window.screen.width > 900 ? 'flex-start' : 'flex-end',
    marginTop: window.screen.width > 900 ? (window.screen.width > 1536 ? '0em' : '4em') : '0em',
    marginLeft: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : 'none') : '1em'
}

const contentDescription = {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
    width: window.screen.width > 900 ? '50%' : '100%',
    marginTop: window.screen.width > 900 ? '0em' : '1em'
}

const titleDescription = {
    fontWeight: 700, lineHeight: '1em', color: '#fff', textShadow: '2px 2px 0px rgb(150 101 253 / 80%)', WebkitTextStroke: '1px rgb(150 101 253 / 80%)', margin: 0, marginBottom: '1em',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '3em' : '2em') : '1.5em'
}
const descriptionTitle = {
    fontWeight: 500, lineHeight: '1.4em', color: '#fff', margin: 0, textAlign: 'justify',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '1.2em' : '1em') : '0.9em'
}
const mainTitle = {
    fontWeight: 700, lineHeight: '1em', color: '#fff', margin: 0, textShadow: '4px 4px 0px rgb(150 101 253 / 80%)', WebkitTextStroke: '1px rgb(150 101 253 / 80%)',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '6em') : '3em',
    textAlign: window.screen.width > 900 ? 'right' : 'left',
    width: window.screen.width > 900 ? '50%' : '100%'
}

// Steps
const contentSteps = {
    display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
    position: 'relative', zIndex: 3,
    flexDirection: window.screen.width > 900 ? 'row' : 'column',
    marginTop: window.screen.width > 900 ? (window.screen.width > 1536 ? '2em' : '-2em') : '-6em',
    marginLeft: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : 'none') : '1em',
}
const contentBtn = {
    cursor: 'pointer',
    marginLeft: window.screen.width > 900 ? '-2em' : '0em',
    marginTop: window.screen.width > 900 ? '0em' : '-1em'
}

// Info Step
const contentInfoStep = {
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '50em' : '45em') : '90vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '8em') : '10em',
    position: 'relative', zIndex: 3,
    marginTop: window.screen.width > 900 ? (window.screen.width > 1536 ? '2em' : '1em') : '2em',
    marginLeft: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : 'none') : '1em',
}
const headerInfo = {
    width: '100%', position: 'absolute', top: 0, right: 0, backgroundColor: '#7A4ADE', zIndex: 1, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center',
    height: window.screen.width > 1536 ? '4em' : '3em',
}
const titleHeader = {
    fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '2.5em' : '2em') : '1.5em'
}
const bodyInfo = {
    width: '90%', position: 'absolute', top: 0, right: '5%', backgroundColor: 'rgb(255 255 255 / 10%)', zIndex: 0, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '2.5em',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '16em' : '8em') : '10em',
}
const textInfo = {
    fontWeight: 500, color: '#fff', margin: 0, lineHeight: '1em', width: '90%', marginTop: '1.5em', textAlign: 'center',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '2em' : '1.2em') : '1em'
}

const btnMoreContent = {
    position: 'fixed', zIndex: '10', left: 'calc( 50vw - 7em )', width: '15em',
    top: window.screen.width > 900 ? '2em' : 'none',
    bottom: window.screen.width > 900 ? 'none' : '2em',
}

// animations
const planetAnimate = {
    position: 'fixed', zIndex: '2',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '35em' : '25em') : '15em',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '4em' : '0em') : '8em',
    right: window.screen.width > 900 ? (window.screen.width > 1536 ? '1em' : '0em') : '2em',
}
const sateliteAnimate = {
    position: 'fixed', zIndex: '2',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '15em' : '7em') : '8em',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '3em' : '5em') : '0em',
    right: window.screen.width > 900 ? (window.screen.width > 1536 ? '50em' : '40em') : '5em',
}
const astronautAnimate = {
    position: 'fixed', zIndex: '3', right: '5em',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '5em') : '6em',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '15em'

}

const rocketAnimate = {
    transform: 'rotateZ(90deg)', width: window.screen.width > 900 ? (window.screen.width > 1536 ? '20em' : '10em') : '10em'
}
const marqueeCss = {
    width: '100vw', position: 'fixed', zIndex: '2', left: '0em',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '45em' : '19em') : '37em'
}

export const cssMainDetail = {
    planet,
    satelite,
    astronaut,
    rocket,
    // ==============
    isActive,
    notActive,
    // ==============
    mainContent,
    overContentTitles,
    contentTitles,
    contentDescription,
    titleDescription,
    descriptionTitle,
    mainTitle,
    // ==============
    contentSteps,
    contentBtn,
    // =============
    contentInfoStep,
    headerInfo,
    titleHeader,
    bodyInfo,
    textInfo,
    btnMoreContent,
    // =============
    planetAnimate,
    sateliteAnimate,
    astronautAnimate,
    rocketAnimate,
    marqueeCss
}