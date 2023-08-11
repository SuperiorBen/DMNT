import { useState } from "react";
import astroPose from "../assets/img/astroPose.png";
import disk from "../assets/img/disk.png";
import diskText from "../assets/img/text.svg";

import dance from "../assets/gifs/dance.gif";
import mouth from "../assets/gifs/mouth.gif";
import triangle from "../assets/gifs/triangle.gif";
import purple from "../assets/gifs/purple.gif";
import ciclon from "../assets/gifs/ciclon.gif";


import Marquee from "react-fast-marquee";
import {
    useMotionValueEvent,
    useScroll, useTransform, motion
} from "framer-motion";

const printedtimes = [1, 0.9, 0.8, 0.7, 0.6]

export const InfoSection = () => {

    const [valRest, setValRest] = useState(0)
    // Control scroll 
    const { scrollYProgress } = useScroll()
    const scaleImg = useTransform(
        scrollYProgress,
        [0.24, 0.60],
        ['0', '0.20']
    )

    useMotionValueEvent(scaleImg, "change", (latest) => {
        setValRest(latest)
        console.log(latest)
    })
    return (
        <>
            <div style={{
                backgroundImage: `url(${astroPose})`, backgroundPosition: 'center', backgroundOrigin: 'center', backgroundSize: 'cover',
                zIndex: 1, position: 'relative', top: '5em', left: window.screen.width > 900 ?  'calc( 38vw - 35em )' : '0em', overflow: 'hidden', borderRadius: '50px',
                width: '35em', height: '45em'
            }}>
                {
                    printedtimes.map((item, i) => <img key={i} style={{
                        boxShadow: 'rgb(150, 101, 253, 0.5) 2px 2px 2px', width: '35em', height: 'auto',
                        borderRadius: '50px', position: 'absolute', zIndex: i,
                        transform: `scale(${item - valRest})`, transition: '0.5s linear'
                    }} src={astroPose} alt="astroPose" />)
                }
            </div>

            <div style={{ width: '50vw', zIndex: 1, position: 'relative', top: '5em', right: '8vw', }}>
                <div style={{
                    fontSize: '1.2em',
                    backgroundColor: 'rgb(150, 101, 253,0.8)', width: '50vw', height: '25em', zIndex: 1, position: 'absolute', top: '0em', right: '0em',
                    borderRadius: '40px',
                    display: 'flex', justifyContent: 'space-around', alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '20em', fontSize: '1.2em' }}>
                        <p style={{
                            fontSize: '3em', fontWeight: 700, lineHeight: '0.9em', color: '#fff',
                            flexWrap: 'wrap', margin: '0em', textShadow: '#0000004d 0px 4px 4px', width: '100%', textAlign: 'center'
                        }}>AGENCIA DE MARKETING</p>
                        <p style={{
                            fontSize: '4.7em', fontWeight: 900, lineHeight: '0.9em', color: '#fff',
                            flexWrap: 'wrap', margin: '0em', textShadow: '#0000004d 0px 4px 4px', width: '100%', textAlign: 'center'
                        }}>DIGITAL</p>
                    </div>

                    <div style={{ width: '25em', height: '25em', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <motion.img
                            initial={{ rotate: -720 }} animate={{ rotate: 0 }} transition={{ repeat: Infinity, duration: 10, ease: 'linear', repeatDelay: 0 }}
                            src={disk} alt="disk" style={{ width: '18em', position: 'absolute', marginTop: '2em' }} />
                        <img src={diskText} alt="diskText" style={{ width: '25em', position: 'absolute' }} />
                    </div>

                </div>

                <Marquee speed={5} autoFill style={{ width: '50vw', height: '5em', top: '30em', right: '0em', zIndex: 1, position: 'absolute', overflow: 'hidden' }}>
                    <p style={{ fontSize: '2em', fontWeight: 500, margin: 0, color: '#9665FD' }}
                    >¡Hacemos <span style={{ fontSize: '2em', fontWeight: 700 }}>realidad</span> tus ideas!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </p>
                </Marquee>

                <div style={{ width: '50vw', height: '10em', top: '35em', right: '0em', zIndex: 1, position: 'absolute' }}>
                    <div style={{ width: '50vw', height: '10em', top: 0, right: 0, zIndex: 2, position: 'absolute', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <img src={dance} alt="dance" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                        <img src={mouth} alt="mouth" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                        <img src={triangle} alt="triangle" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                        <img src={purple} alt="purple" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                        <img src={ciclon} alt="ciclon" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                    </div>
                    <div style={{ width: '4em', height: '10em', backgroundColor: 'rgb(150, 101, 253,0.8)', position: 'absolute', bottom: '-5em', left: 0, zIndex: 1 }} />
                </div>


            </div>

        </>
    )
}
