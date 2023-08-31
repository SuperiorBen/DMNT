import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { cssAPose } from '../../helpers/StylesInfoService'


export default function AstroPose() {
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
    })
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={cssAPose.containerAstro}>
            {
                cssAPose.printedtimes.map((item, i) => <img key={i} src={cssAPose.astroPose} style={{ ...cssAPose.innerImg, zIndex: i, transform: `scale(${item - valRest})` }} alt="astroPose" />)
            }
        </motion.div>
    )
}
