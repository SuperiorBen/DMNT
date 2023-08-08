import Lottie from "lottie-react";
import { motion } from "framer-motion"
import ovni from "../assets/animations/ovni.json"
import man from "../assets/manFloat.svg"
import lighPurple from "../assets/lighPurple.svg"
export const OvniAnimate = () => {
    return (
        <>
            <motion.img
                initial={{ top: window.screen.width > 900 ? (window.screen.width > 1536 ? '20em' : '12em') : '12em' }}
                animate={{ top: window.screen.width > 900 ? (window.screen.width > 1536 ? '19.5em' : '11.5em') : '11.5em' }}
                transition={{ duration: 1.5, repeatType: "reverse", repeat: Infinity, ease: "easeInOut" }}
                src={man} style={{
                    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '5.5em', position: 'fixed', zIndex: 6,
                    right: window.screen.width > 900 ? (window.screen.width > 1536 ? '15em' : '12em') : '4em', userSelect:'none'
                }} alt="man" />
            <motion.img
                initial={{ transform: 'rotateZ(0deg)' }}
                animate={{ transform: 'rotateZ(19deg)' }}
                transition={{ duration: 4, repeatType: "reverse", repeat: Infinity, ease: "easeInOut" }}
                src={lighPurple} style={{
                    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '40em' : '30em') : '35em',
                    position: 'fixed', zIndex: 5,
                    top: window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '7em') : '5em',
                    right: window.screen.width > 900 ? (window.screen.width > 1536 ? '-2em' : '0em') : '-11em',
                    transformOrigin: 'top center', userSelect:'none'
                }} alt="man" />
            <Lottie style={{
                width: window.screen.width > 900 ? (window.screen.width > 1536 ? '20em' : '12em') : '10em', position: 'fixed', zIndex: 6, top: window.screen.width > 900 ? '2em' : '0.2em',
                right: window.screen.width > 900 ? '8em' : '0.6em', userSelect:'none'
            }} animationData={ovni} />
        </>
    )
}
