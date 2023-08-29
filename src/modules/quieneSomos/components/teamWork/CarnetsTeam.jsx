import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { cssCarnets } from "../../helpers/StyleTeamWork"
export default function CarnetsTeam () {
    const [move, setMove] = useState('0vw')
    // Control scroll 
    const { scrollYProgress } = useScroll()
    const positionDiv = useTransform(
        scrollYProgress,
        [0.6, 1],
        ['0px', cssCarnets.widthContent]
    )
    useMotionValueEvent(positionDiv, "change", (latest) => {
        setMove(latest)
    })
    return (
        <motion.div layout style={{ ...cssCarnets.contentCarnets, right: move }}>
            <img style={{ transform: 'rotateZ(3deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet1} alt="carnet1" />
            <img style={{ transform: 'rotateZ(-2deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet2} alt="carnet2" />
            <img style={{ transform: 'rotateZ(1deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet3} alt="carnet3" />
            <img style={{ transform: 'rotateZ(-3deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet4} alt="carnet4" />
            <img style={{ transform: 'rotateZ(1deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet5} alt="carnet5" />
            <img style={{ transform: 'rotateZ(5deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet6} alt="carnet6" />
            <img style={{ transform: 'rotateZ(-2deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet7} alt="carnet7" />
            <img style={{ transform: 'rotateZ(5deg)', ...cssCarnets.carnetStyle }} src={cssCarnets.carnet8} alt="carnet8" />
        </motion.div>
    )
}
