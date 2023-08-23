import { motion } from 'framer-motion'
import stars from '../../modules/servicios/main/assets/animations/starsBg.json'
import Lottie from "lottie-react";

// Style galaxy
const contentGalaxy = { width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, backgroundColor: '#171623', zIndex: 1 }
const blueLight = {
    background: 'radial-gradient(circle, rgb(7 193 236) 0%, rgba(9, 79, 116, 0.3) 35%, rgba(9, 79, 116, 0) 100%)', position: 'absolute', top: '-50vh', left: '15vw', zIndex: 2, borderRadius: '50%', width: '70vw', height: '100vh', boxShadow: 'rgb(6 204 255 / 20%) 2px 0px 500px'
}
const purpleLight = {
    background: 'radial-gradient(circle, rgba(154,35,235,1) 0%, rgba(154,35,235,0.5326505602240896) 35%, rgba(0,212,255,0) 100%)', position: 'absolute', zIndex: 2, borderRadius: '50%', height: '140vh', boxShadow: '2px 0px 500px #9a23eb75',
    top: '35vh', left: window.screen.width > 900 ? '5vw' : '-20vw',
    width: window.screen.width > 900 ? '90vw' : '140vw',
}
const galaxyStars = {
    position: 'absolute', zIndex: 3,
    width: window.screen.width > 900 ? '100vw' : '100vh',
    transform: window.screen.width > 900 ? 'rotateZ(0deg)' : 'rotateZ(90deg)',
    top: window.screen.width > 900 ? '0em' : '11em',
    left: window.screen.width > 900 ? '0em' : '-12em'
}
export const GalaxyBg = () => {
    return (
        < div style={contentGalaxy} >
            <motion.div
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 0.2, translateY: 0 }}
                transition={{ duration: 3, delay: 1 }}
                style={blueLight}></motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 0.3, translateY: 0 }}
                transition={{ duration: 3, delay: 1 }}
                style={purpleLight}></motion.div>
            <Lottie style={galaxyStars} animationData={stars} />
        </div >
    )
}
