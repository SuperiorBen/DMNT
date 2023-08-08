
import {cssBgBuild} from "../helpers/stylesContacto"
import Marquee from "react-fast-marquee";
export const BgBuild = () => {

    
    return (
        <>
            <Marquee speed={5} autoFill style={cssBgBuild.marquee3}>
                <img src={cssBgBuild.bgBuilt3} alt="bgBuilt3" style={cssBgBuild.build3} />
            </Marquee>
            <Marquee speed={5} autoFill direction="right" style={cssBgBuild.marquee2}>
                <img src={cssBgBuild.bgBuilt2} alt="bgBuilt2" style={cssBgBuild.build2} />
            </Marquee>
            <img src={cssBgBuild.billboard} alt="billboard" style={cssBgBuild.billboardImg} />
            <Marquee speed={5} autoFill style={cssBgBuild.marquee1}>
                <img src={cssBgBuild.bgBuilt1} alt="bgBuilt1" style={cssBgBuild.build3} />
            </Marquee>
        </>
    )
}
