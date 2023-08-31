import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee";
import PropTypes from 'prop-types';
import { cssCarnets } from "../../helpers/StyleTeamWork"



export default function CarnetsTeam({ isRun }) {
    return (
        <motion.div style={{
            position: 'absolute', bottom: '2em',
            width: window.screen.width > 900 ? `calc(100vw - 29.2em)` : '100vw',
            transition: '1s ease-in-out', transitionDelay: '1.5s', right: isRun ? '-100vw' : 0,
        }}
            layout
        >
            <Marquee speed={40}
                pauseOnClick
                style={cssCarnets.marqueeCarnets}>
                <img style={{ transform: 'rotateZ(3deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet1} alt="carnet1" />
                <img style={{ transform: 'rotateZ(-2deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet2} alt="carnet2" />
                <img style={{ transform: 'rotateZ(1deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet3} alt="carnet3" />
                <img style={{ transform: 'rotateZ(-3deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet4} alt="carnet4" />
                <img style={{ transform: 'rotateZ(1deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet5} alt="carnet5" />
                <img style={{ transform: 'rotateZ(5deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet6} alt="carnet6" />
                <img style={{ transform: 'rotateZ(-2deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet7} alt="carnet7" />
                <img style={{ transform: 'rotateZ(5deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet8} alt="carnet8" />
            </Marquee>
        </motion.div>
    )
}
// Props validation
CarnetsTeam.propTypes = {
    isRun: PropTypes.bool
};

