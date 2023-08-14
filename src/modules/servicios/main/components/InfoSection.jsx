import { useRef, useState } from "react";
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
    const constraintsRef = useRef(null)

    const [valRest, setValRest] = useState(0)
    // Control scroll 
    const { scrollYProgress } = useScroll()
    const scaleImg = useTransform(
        scrollYProgress,
        [0.16, 0.80],
        ['0', '0.20']
    )

    useMotionValueEvent(scaleImg, "change", (latest) => {
        setValRest(latest)
        console.log(latest)
    })

    return (
        <>
            {/* AstroPose Image */}
            <div style={{
                backgroundImage: `url(${astroPose})`, backgroundPosition: 'center', backgroundOrigin: 'center', backgroundSize: 'cover',
                zIndex: 1, position: 'relative', overflow: 'hidden', borderRadius: window.screen.width > 900 ? '20px' : '10px 10px 0px 0px',
                width: window.screen.width > 900 ? '30vw' : '98vw',
                height: window.screen.width > 900 ? '80vh' : '60vh',
                left: window.screen.width > 900 ? '2vw' : '1vw',
                top: window.screen.width > 900 ? '2em' : '0.5em',
            }}>
                {
                    printedtimes.map((item, i) => <img key={i} style={{
                        boxShadow: 'rgb(150, 101, 253, 0.5) 2px 2px 2px',
                        borderRadius: window.screen.width > 900 ? '20px' : '10px', position: 'absolute', zIndex: i,
                        transform: `scale(${item - valRest})`, transition: '0.5s linear',
                        width: window.screen.width > 900 ? '30vw' : '95vw', height: window.screen.width > 900 ? '80vh' : '60vh'
                    }} src={astroPose} alt="astroPose" />)
                }
            </div>

            {/* Banner with disk */}
            <div style={{
                zIndex: 1, position: window.screen.width > 900 ? 'absolute' : 'relative' ,
                width: window.screen.width > 900 ? '50vw' : '100vw',
                top: window.screen.width > 900 ? '2em' : '-0.4em',
                right: window.screen.width > 900 ? '8vw' : 0
            }}>
                <div style={{
                    fontSize: window.screen.width > 900 ? '1em' : '1.2em',
                    backgroundColor: 'rgb(150, 101, 253,0.8)', zIndex: 1, position: 'absolute',
                    borderRadius: window.screen.width > 900 ? '20px' : '0px 0px 10px 10px',
                    display: 'flex',
                    flexDirection: window.screen.width > 900 ? 'row' : 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    top: window.screen.width > 900 ? '0em' : '1em',
                    right: window.screen.width > 900 ? '0em' : '1vw',
                    width: window.screen.width > 900 ? '50vw' : '98vw',
                    height: window.screen.width > 900 ? '25em' : '75vh'
                }}>
                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative',
                        width: window.screen.width > 900 ? '20em' : '100%',
                        fontSize: window.screen.width > 900 ? '1.2em' : '1em',
                        top: window.screen.width > 900 ? 0 : '2em'
                    }}>
                        <p style={{
                            fontSize: '3em', fontWeight: 700, lineHeight: '0.9em', color: '#fff',
                            flexWrap: 'wrap', margin: '0em', textShadow: '#0000004d 0px 4px 4px', width: '100%', textAlign: 'center'
                        }}>AGENCIA DE MARKETING</p>
                        <p style={{
                            fontSize: '4.7em', fontWeight: 900, lineHeight: '0.9em', color: '#fff',
                            flexWrap: 'wrap', margin: '0em', textShadow: '#0000004d 0px 4px 4px', width: '100%', textAlign: 'center'
                        }}>DIGITAL</p>
                    </div>

                    <div style={{
                        position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
                        width: window.screen.width > 900 ? '25em' : '20em', height: window.screen.width > 900 ? '25em' : '20em',
                    }}>
                        <motion.img
                            initial={{ rotate: -720 }} animate={{ rotate: 0 }} transition={{ repeat: Infinity, duration: 10, ease: 'linear', repeatDelay: 0 }}
                            src={disk} alt="disk" style={{ width: window.screen.width > 900 ? '18em' : '70%', position: 'absolute', marginTop: '2em' }} />
                        <img src={diskText} alt="diskText" style={{ width: window.screen.width > 900 ? '25em' : '95%', position: 'absolute' }} />
                    </div>

                </div>

                <Marquee speed={5} autoFill style={{
                    width: window.screen.width > 900 ? '50vw' : '100vw',
                    height: '5em',
                    top: window.screen.width > 900 ? '30em' : '78vh',
                    right: '0em', zIndex: 1, position: 'absolute', overflow: 'hidden'
                }}>
                    <p style={{ fontSize: window.screen.width > 900 ? '2em' : '1.5em', fontWeight: 500, margin: 0, color: '#9665FD' }}
                    >¡Hacemos <span style={{ fontSize: '2em', fontWeight: 700 }}>realidad</span> tus ideas!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </p>
                </Marquee>

                <div ref={constraintsRef} style={{
                    width: window.screen.width > 900 ? '50vw' : '100vw',
                    height: '10em',
                    top: window.screen.width > 900 ? '35em' : '90vh',
                    right: '0em', zIndex: 1, position: 'absolute'
                }}>
                    <motion.div drag="x"
                        dragConstraints={constraintsRef}
                        dragSnapToOrigin
                        style={{
                            width: window.screen.width > 900 ? '50vw' : '55em',
                            height: '10em',
                            top: 0,
                            right: window.screen.width > 900 ? 0 : '-15em',
                            zIndex: 2, position: 'absolute', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'
                        }}>
                        <img src={dance} alt="dance" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                        <img src={mouth} alt="mouth" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                        <img src={triangle} alt="triangle" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                        <img src={purple} alt="purple" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                        <img src={ciclon} alt="ciclon" style={{ width: '10em', height: '10em', borderRadius: 15 }} />
                    </motion.div>
                    <div style={{
                        backgroundColor: 'rgb(150, 101, 253,0.8)', position: 'absolute',
                        width: window.screen.width > 900 ? '4em' : '90%',
                        height: window.screen.width > 900 ? '10em' : '3em',
                        bottom: window.screen.width > 900 ? '-5em' : '-1em',
                        left: window.screen.width > 900 ? 0 : '5%',
                        zIndex: 1
                    }} />
                </div>
            </div>

        </>
    )
}
