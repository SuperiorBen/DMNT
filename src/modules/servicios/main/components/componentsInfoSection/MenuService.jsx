import { SvgRocket } from "../svgComponents/SvgRocket";
import { SvgAstronaut } from "../svgComponents/SvgAstronaut";
import { SvgOvni } from "../svgComponents/svgOvni";
import { SvgAlien } from "../svgComponents/svgAlien";
import '../../assets/css/bannerStyle.css'

export const MenuService = () => {
    return (
        <div style={{
            backgroundColor: 'rgb(150, 101, 253,0.8)', zIndex: 1,
            position: window.screen.width > 900 ? 'absolute' : 'relative', width: window.screen.width > 1536 ? '74vw' : '100vw', 
            height: window.screen.width > 900 ? '21.5em' : '33.5em',
            top:  window.screen.width > 900 ? (window.screen.width > 1536 ? '55em' : '40em') : '60em',
             right:  window.screen.width > 1536 ? '13vw' : 0, display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <div style={{
                width: '100vw', height: window.screen.width > 900 ? '20em' : '32em', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'
            }}>
                {/* Rocket =======================================================================================*/}
                <a className="blueOption optionFormat" style={{
                    width: window.screen.width > 900 ? '50%' : '100%',
                    height: window.screen.width > 900 ? '10em' : '8em'
                }}>
                    <p className="textPurple textFormart"
                        style={{
                            fontSize: window.screen.width > 900 ? '3em' : '2em',
                            width: window.screen.width > 900 ? '50%' : '55%'
                        }}>MARKETING DIGITAL</p>
                    <div className="contentSvg" style={{
                        width: window.screen.width > 900 ? '12em' : '8em', transform: 'rotateZ(30deg)',
                        marginRight: window.screen.width > 900 ? '5em' : '2em'
                    }}><SvgRocket /></div>
                    <div className="textureBtn"></div>
                </a>
                {/* Astronaut ===================================================================================*/}
                <div className="purpleOption optionFormat" style={{
                    width: window.screen.width > 900 ? '50%' : '100%',
                    height: window.screen.width > 900 ? '10em' : '8em'
                }}>
                    <p className="textWhite textFormart" style={{
                        fontSize: window.screen.width > 900 ? '3em' : '2em',
                        width: window.screen.width > 900 ? '50%' : '55%'
                    }}>SITIOS WEB / APLICACIONES</p>
                    <div className="contentSvg" style={{
                        width: window.screen.width > 900 ? '12em' : '7em', transform: 'rotateZ(0deg)', marginRight: '1em'
                    }}><SvgAstronaut /></div>
                    <div className="textureBtn"></div>
                </div>
                {/* Ovni ========================================================================================*/}
                <div className="purpleOption optionFormat" style={{
                    width: window.screen.width > 900 ? '50%' : '100%',
                    height: window.screen.width > 900 ? '10em' : '8em'
                }}>
                    <p className="textWhite textFormart" style={{
                        fontSize: window.screen.width > 900 ? '3em' : '2em',
                        width: window.screen.width > 900 ? '50%' : '55%'
                    }}>AUDIOVISUALES</p>
                    <div className="contentSvg" style={{
                        width: window.screen.width > 900 ? '18em' : '11em', transform: 'rotateZ(-40deg)', marginRight: '-2em'
                    }}><SvgOvni /></div>
                    <div className="textureBtn"></div>
                </div>
                {/* Alien =======================================================================================*/}
                <div className="blueOption optionFormat" style={{
                    width: window.screen.width > 900 ? '50%' : '100%',
                    height: window.screen.width > 900 ? '10em' : '8em'
                }}>
                    <p className="textPurple textFormart" style={{
                        fontSize: window.screen.width > 900 ? '3em' : '2em',
                        width: window.screen.width > 900 ? '50%' : '55%'
                    }}>MATERIAL POP</p>
                    <div className="contentSvg" style={{
                        width: window.screen.width > 900 ? '21em' : '14em', transform: 'rotateZ(0deg)', marginRight: '1em',
                        marginTop: window.screen.width > 900 ? '8em' : '6em'
                    }}><SvgAlien /></div>
                    <div className="textureBtn"></div>
                </div>
            </div>
        </div>
    )
}
