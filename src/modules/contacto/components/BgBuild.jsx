
import bgBuilt1 from "../assets/Fbuild.svg"
import bgBuilt2 from "../assets/Sbuild.svg"
import bgBuilt3 from "../assets/Tbuild.svg"
import billboard from "../assets/billboard.png"
import Marquee from "react-fast-marquee";
export const BgBuild = () => {
    return (
        <>
            <Marquee speed={5} autoFill style={{ position: 'fixed', zIndex: 1, width: '100vw', bottom: '0em' }}>
                <img src={bgBuilt3} alt="bgBuilt3" style={{ width: '100vw' }} />
            </Marquee>
            <Marquee speed={5} autoFill direction="right" style={{ position: 'fixed', zIndex: 2, width: '100vw', bottom: '-3em' }}>
                <img src={bgBuilt2} alt="bgBuilt2" style={{ width: '80vw' }} />
            </Marquee>
            <img src={billboard} alt="billboard" style={{ position: 'fixed', zIndex: 3, width: '22em', bottom: '1em', left: '10em' }} />
            <Marquee speed={5} autoFill style={{ position: 'fixed', zIndex: 4, width: '100vw', bottom: '-6em' }}>
                <img src={bgBuilt1} alt="bgBuilt1" style={{ width: '80vw' }} />
            </Marquee>
        </>
    )
}
