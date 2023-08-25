// Info main component part 2
// components
import { SvgRocket } from "../components/svgComponents/SvgRocket";
import { SvgAstronaut } from "../components/svgComponents/SvgAstronaut";
import { SvgOvni } from "../components/svgComponents/svgOvni";
import { SvgAlien } from "../components/svgComponents/svgAlien";

//Array menu
const optionsMenu = [
    {
        title: 'MARKETING DIGITAL',
        url:'/servicios/marketing-digital',
        linkClass: 'blueOption optionFormat',
        pClass: 'textPurple textFormart',
        contentSvgStyle: {
            width: window.screen.width > 900 ? '12em' : '8em', transform: 'rotateZ(30deg)',
            marginRight: window.screen.width > 900 ? '5em' : '2em'
        },
        component: SvgRocket
    },
    {
        title: 'SITIOS WEB / APLICACIONES',
        url:'/servicios/desarrollo-web-aplicaciones',
        linkClass: 'purpleOption optionFormat',
        pClass: 'textWhite textFormart',
        contentSvgStyle: {
            width: window.screen.width > 900 ? '12em' : '7em', transform: 'rotateZ(0deg)', marginRight: '1em'
        },
        component: SvgAstronaut
    },
    {
        title: 'AUDIOVISUALES',
        url:'/servicios/audiovisuales',
        linkClass: 'purpleOption optionFormat',
        pClass: 'textWhite textFormart',
        contentSvgStyle: {
            width: window.screen.width > 900 ? '18em' : '11em', transform: 'rotateZ(-40deg)', marginRight: '-2em'
        },
        component: SvgOvni
    },
    {
        title: 'MATERIAL POP',
        url:'/servicios/material-pop',
        linkClass: 'blueOption optionFormat',
        pClass: 'textPurple textFormart',
        contentSvgStyle: {
            width: window.screen.width > 900 ? '21em' : '14em', transform: 'rotateZ(0deg)', marginRight: '1em',
            marginTop: window.screen.width > 900 ? '8em' : '6em'
        },
        component: SvgAlien
    }
]

// Css variables
const contentMain = {
    backgroundColor: 'rgb(150, 101, 253,0.8)', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    position: window.screen.width > 900 ? 'absolute' : 'relative',
    width: window.screen.width > 1536 ? '74vw' : '100vw',
    height: window.screen.width > 900 ? '25em' : '35.5em',
    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '55em' : '42em') : '62em',
    right: window.screen.width > 1536 ? '13vw' : 0
}
const contentMenu = {
    display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', position: 'relative',
    width: window.screen.width > 1536 ? '74vw' : '100vw',
    height: window.screen.width > 900 ? '20em' : '32em'
}
const titleAction = {
    margin: '0px auto 0px auto', marginTop: '-0.3em', fontWeight: 700, color: '#fff', zIndex: 2, position: 'relative',
    fontSize: window.screen.width > 900 ? '3em' : '2em'
}
const linkStyle = {
    textDecoration:'none',
    width: window.screen.width > 900 ? '50%' : '100%',
    height: window.screen.width > 900 ? '10em' : '8em'
}
const pStyle = {
    fontSize: window.screen.width > 900 ? '3em' : '2em',
    width: window.screen.width > 900 ? '50%' : '55%'
}


export const cssMenuService = {
    optionsMenu,
    //===========
    contentMain,
    contentMenu,
    titleAction,
    linkStyle,
    pStyle
}