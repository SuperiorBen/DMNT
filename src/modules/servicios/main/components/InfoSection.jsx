import Marquee from "react-fast-marquee";
import { AstroPose } from "./componentsInfoSection/AstroPose";
import { BannerTitle } from "./componentsInfoSection/BannerTitle";
import { GifSlider } from "./componentsInfoSection/GifSlider";
import { cssInfo } from '../helpers/StylesInfoService'
import { SvgRocket } from "./svgComponents/SvgRocket";
import { SvgAstronaut } from "./svgComponents/SvgAstronaut";
import { SvgOvni } from "./svgComponents/svgOvni";
import { SvgAlien } from "./svgComponents/svgAlien";




export const InfoSection = () => {
    return (
        <>
            {/* AstroPose Image */}
            <AstroPose />

            {/* Banner with disk */}
            <div style={cssInfo.containerBanner}>
                {/* Banner title */}
                <BannerTitle />

                <Marquee speed={5} autoFill style={cssInfo.marqueeBanner}>
                    <p style={cssInfo.titleBanner}
                    >¡Hacemos <span style={{ fontSize: '2em', fontWeight: 700 }}>realidad</span> tus ideas!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </p>
                </Marquee>

                {/* Gif slider */}
                <GifSlider />
            </div>

            <div style={{
                backgroundColor: 'rgb(150, 101, 253,0.8)', zIndex: 1,
                position: window.screen.width > 900 ? 'absolute' : 'relative', width: '100vw', height: '21.5em', top: '45em', right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                <div style={{
                    width: '100vw', height: '20em', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'
                }}>
                    {/* Rocket */}
                    <div style={{
                        width: '50%', height: '10em', backgroundColor: '#08C7D1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'
                    }}>
                        <p style={{
                            fontSize: '3em', lineHeight: '1em', fontWeight: 700, margin: 0, color: '#7E5ACA', fontFamily: `'Prompt', sans-serif`, fontStyle: 'italic', width: '50%',
                            marginLeft: '0.5em'
                        }}>MARKETING DIGITAL</p>
                        <div style={{ width: '12em', transform: 'rotateZ(30deg)', marginRight: '5em' }}><SvgRocket color='#7E5ACA' /></div>
                    </div>
                    {/* Astronaut */}
                    <div style={{
                        width: '50%', height: '10em', backgroundColor: '#7E5ACA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'
                    }}>
                        <p style={{
                            fontSize: '3em', lineHeight: '1em', fontWeight: 700, margin: 0, color: '#fff', fontFamily: `'Prompt', sans-serif`, fontStyle: 'italic', width: '50%',
                            marginLeft: '0.5em'
                        }}>SITIOS WEB / APLICACIONES</p>
                        <div style={{ width: '12em', transform: 'rotateZ(0deg)', marginRight: '1em' }}><SvgAstronaut color='#fff' /></div>
                    </div>
                    {/* Ovni */}
                    <div style={{
                        width: '50%', height: '10em', backgroundColor: '#7E5ACA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'
                    }}>
                        <p style={{
                            fontSize: '3em', lineHeight: '1em', fontWeight: 700, margin: 0, color: '#fff', fontFamily: `'Prompt', sans-serif`, fontStyle: 'italic', width: '50%',
                            marginLeft: '0.5em'
                        }}>AUDIOVISUALES</p>
                        <div style={{ width: '18em', transform: 'rotateZ(-40deg)', marginRight: '-2em' }}><SvgOvni color='#fff' /></div>
                    </div>
                    {/* Alien */}
                    <div style={{
                        width: '50%', height: '10em', backgroundColor: '#08C7D1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'
                    }}>
                        <p style={{
                            fontSize: '3em', lineHeight: '1em', fontWeight: 700, margin: 0, color: '#7E5ACA', fontFamily: `'Prompt', sans-serif`, fontStyle: 'italic', width: '80%',
                            marginLeft: '0.5em'
                        }}>MATERIAL POP</p>
                        <div style={{ width: '21em', transform: 'rotateZ(0deg)', marginRight: '1em', marginTop: '8em' }}><SvgAlien color='#7E5ACA' /></div>
                    </div>
                </div>
            </div>


        </>
    )
}
