import { motion, } from 'framer-motion'
import PropTypes from 'prop-types';
import { cssCarnets } from "../../helpers/StyleTeamWork"
export default function CarnetsTeam({ isRun }) {
    return (
        <motion.div
            layout style={{
                overflow: 'hidden', position: 'absolute', bottom: 0, display: 'flex', alignItems: 'center',
                justifyContent: 'flex-start', transition: '1s ease-in-out', transitionDelay: '1.5s', right: isRun ? '-100vw' : 0,
                width: window.screen.width > 900 ? `calc(100vw - 29em)` : '100vw',
            }}
        >
            <motion.div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                position: 'relative', right: '0px', cursor: 'grab', userSelect: 'none', padding: '0px 1em',
                width:'100vw'
            }}
                drag="x"
                dragConstraints={{ right: 0,
                    left: '100vw'}}
                // dragSnapToOrigin
                dragElastic={0}>
                <img style={{ transform: 'rotateZ(3deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet1} alt="carnet1" />
                <img style={{ transform: 'rotateZ(-2deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet2} alt="carnet2" />
                <img style={{ transform: 'rotateZ(1deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet3} alt="carnet3" />
                <img style={{ transform: 'rotateZ(-3deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet4} alt="carnet4" />
                <img style={{ transform: 'rotateZ(1deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet5} alt="carnet5" />
                <img style={{ transform: 'rotateZ(5deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet6} alt="carnet6" />
                <img style={{ transform: 'rotateZ(-2deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet7} alt="carnet7" />
                <img style={{ transform: 'rotateZ(5deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet8} alt="carnet8" />
            </motion.div>
        </motion.div>
    )
}

// Props validation
CarnetsTeam.propTypes = {
    isRun: PropTypes.bool
};

