import Lottie from "lottie-react";
import { motion } from 'framer-motion'
// Animation JSON
import scroll from "../../assets/animation/scroll.json"

// css variables
const contentMessage = {
    width: '8em', height: '8em', borderRadius: '50%', position: 'absolute', top: 5, right: 5, zIndex: 10, border: '1px solid #9665FD', overflow: 'hidden',
    display: 'flex', justifyContent: 'center', alignItems: 'center'
}
const animation = { width: '8em' }
const bgWhite = {
    backgroundColor: 'rgb(255 255 255 / 95%)',
    width: '11em', height: '11em', position: 'absolute', top: 0, left: 0, zIndex: -1
}

export const ScrollIndicator = () => {
    return (
        <motion.div
            initial={{ transform: 'scale(0.85)', opacity: 0 }}
            animate={{ transform: 'scale(1)', opacity: 1 }}
            transition={{ duration: 1, ease: "linear", transform: { duration: 0.5, repeat: Infinity, repeatType: "reverse" } }}
            style={contentMessage}>
            <Lottie style={animation} animationData={scroll} />
            <div style={bgWhite} />
        </motion.div>
    )
}
