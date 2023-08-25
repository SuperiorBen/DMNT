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
    position: 'absolute', top: 0, left: 0, zIndex: 3, display: 'flex', width: '100vw', height: '100vh', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden',
    alignItems: window.screen.width > 900 ? 'center' : 'flex-start',
}

// Title and description
const contentTitles = {
    display: 'flex', position: 'absolute',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '80vw' : '80vw') : '60vw',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '16em' : '16em') : '25em',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '7em') : '7em',
    left: window.screen.width > 900 ? (window.screen.width > 1536 ? '10vw' : '10vw') : '5vw', 
    flexDirection: window.screen.width > 900 ? 'row' : 'column-reverse',
    justifyContent: window.screen.width > 900 ? 'center' : 'flex-end',
    alignItems: window.screen.width > 900 ? 'flex-start' : 'flex-end'
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
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '1.2em' : '1em') : '0.8em'
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
    position: window.screen.width > 900 ? 'relative' : 'absolute', zIndex: 3,
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '9em') : '1em',
    right: window.screen.width > 900 ? (window.screen.width > 1536 ? 'none' : 'none') : '2vw',
    flexDirection: window.screen.width > 900 ? 'row' : 'column',
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
    bottom: window.screen.width > 900 ? (window.screen.width > 1536 ? '-12em' : '-11em') : '2em',
    right: window.screen.width > 900 ? (window.screen.width > 1536 ? '-25em' : '-15em') : '5vw',
    position: window.screen.width > 900 ? 'relative' : 'absolute', zIndex: 3
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
export const cssMainDetail = {
    isActive,
    notActive,
    // ==============
    mainContent,
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
    textInfo
}