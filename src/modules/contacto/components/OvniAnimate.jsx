import Lottie from "lottie-react";
import { motion } from "framer-motion"
import ovni from "../assets/animations/ovni.json"
import man from "../assets/manFloat.svg"
import lighPurple from "../assets/lighPurple.svg"
export const OvniAnimate = () => {
    return (
        <>
            <motion.img
                initial={{ top: '12em' }}
                animate={{ top: '11.5em' }}
                transition={{ duration: 1.5, repeatType: "reverse", repeat: Infinity, ease: "easeInOut" }}
                src={man} style={{ width: '5em', position: 'fixed', zIndex: 6, top: '12em', right: '12em' }} alt="man" />
            <motion.img
                initial={{ transform: 'rotateZ(0deg)' }}
                animate={{ transform: 'rotateZ(19deg)' }}
                transition={{ duration: 4, repeatType: "reverse", repeat: Infinity, ease: "easeInOut" }}
                src={lighPurple} style={{ width: '30em', position: 'fixed', zIndex: 5, top: '7em', right: '0em', transform: 'rotateZ(10deg)', transformOrigin: 'top center' }} alt="man" />
            <Lottie style={{ width: '12em', position: 'fixed', zIndex: 6, top: '2em', right: '8em' }} animationData={ovni} />
        </>
    )
}
