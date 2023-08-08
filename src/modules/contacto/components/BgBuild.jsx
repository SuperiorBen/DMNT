
import bgBuilt1 from "../assets/Fbuild.svg"
import bgBuilt2 from "../assets/Sbuild.svg"
import bgBuilt3 from "../assets/Tbuild.svg"
import billboard from "../assets/billboard.png"
import Marquee from "react-fast-marquee";
export const BgBuild = () => {

    const widthBilboard = window.screen.width > 900 ? (window.screen.width > 1536 ? '40em' : '22em') : '15em'
    return (
        <>
            <Marquee speed={5} autoFill style={{ position: 'fixed', zIndex: 1, width: '100vw', bottom: '0em' , userSelect:'none'}}>
                <img src={bgBuilt3} alt="bgBuilt3" style={{ width: window.screen.width > 900 ? '100vw' : '250vw' }} />
            </Marquee>
            <Marquee speed={5} autoFill direction="right" style={{ position: 'fixed', zIndex: 2, width: '100vw', bottom: '-3em', userSelect:'none' }}>
                <img src={bgBuilt2} alt="bgBuilt2" style={{ width: window.screen.width > 900 ? '80vw' : '180vw' }} />
            </Marquee>
            <img src={billboard} alt="billboard" style={{
                position: 'fixed', zIndex: 3, width: widthBilboard, bottom: '1em',
                left: window.screen.width > 900 ? '5%' : `calc( 50vw - ${widthBilboard} / 2 )`, userSelect:'none'
            }} />
            <Marquee speed={5} autoFill style={{ position: 'fixed', zIndex: 4, width: '100vw', bottom: window.screen.width > 900 ? '-6em' : '-3em', userSelect:'none' }}>
                <img src={bgBuilt1} alt="bgBuilt1" style={{ width: window.screen.width > 900 ? '80vw' : '160vw' }} />
            </Marquee>
        </>
    )
}
