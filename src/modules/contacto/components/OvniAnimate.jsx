import Lottie from "lottie-react";
import { motion } from "framer-motion"

import { cssOvni } from "../helpers/stylesContacto"
export const OvniAnimate = () => {
    return (
        <>
            <motion.img
                initial={{ top: window.screen.width > 900 ? (window.screen.width > 1536 ? '20em' : '12em') : '12em' }}
                animate={{ top: window.screen.width > 900 ? (window.screen.width > 1536 ? '19.5em' : '11.5em') : '11.5em' }}
                transition={{ duration: 1.5, repeatType: "reverse", repeat: Infinity, ease: "easeInOut" }}
                src={cssOvni.man} style={cssOvni.manFloat} alt="man" />
            <motion.img
                initial={{ transform: 'rotateZ(0deg)' }}
                animate={{ transform: 'rotateZ(19deg)' }}
                transition={{ duration: 4, repeatType: "reverse", repeat: Infinity, ease: "easeInOut" }}
                src={cssOvni.lightPurple} style={cssOvni.lightMove} alt="light" />
            <Lottie style={cssOvni.ovniMove} animationData={cssOvni.ovni} />
        </>
    )
}
