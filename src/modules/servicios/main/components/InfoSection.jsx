import { useState } from "react";
import astroPose from "../assets/img/astroPose.png";
import {
    useMotionValueEvent,
    useScroll, useTransform
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
                zIndex: 1, position: 'absolute', top: '1em', left: '2em', width: '25em', height: '33em', overflow: 'hidden', borderRadius: '50px'
            }}>
                {
                    printedtimes.map((item, i) => <img key={i} style={{
                        boxShadow: 'rgb(150, 101, 253, 0.5) 2px 2px 2px', width: '25em', height: 'auto',
                        borderRadius: '50px', position: 'absolute', zIndex: i,
                        transform: `scale(${item - valRest})`, transition: '0.5s linear'
                    }} src={astroPose} alt="astroPose" />)
                }
            </div>

        </>
    )
}
