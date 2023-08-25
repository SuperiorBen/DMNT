// Begin step
const contentStep = {
    position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '18em' : '12em') : '7em',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '4em' : '3em') : '6em',
}
const titleStep = {
    fontWeight: 700, color: '#fff', margin: 0, lineHeight: '1em', position: 'absolute', zIndex: 1, userSelect: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center',
    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '1.5em' : '1.2em') : '1em',
    width: window.screen.width > 900 ? 'auto' : '7em',
    height: window.screen.width > 900 ? 'auto' : '6em'
}
const svgMain = {
    position: 'absolute', zIndex: 0, transition: '0.2s',
    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '18em' : '12em') : '7em',
    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '4em' : '3em') : '6em'
}

export const cssSteps = {
    contentStep,
    titleStep,
    svgMain
}

