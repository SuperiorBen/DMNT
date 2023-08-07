import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { CarnetsTeam } from './CarnetsTeam'
import { cssTeamWork } from "../../helpers/StyleTeamWork"

export const TeamWork = () => {
    const [isRun, setRun] = useState(true)
    // Control scroll 
    const { scrollYProgress } = useScroll()
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        scrollPosition < 0.53 && setRun(true)
        scrollPosition > 0.53 && setRun(false)
    })
    return (
        <motion.div layout style={{ ...cssTeamWork.contentTeam, top: isRun ? '100vh' : 0 }}>
            <div style={{ ...cssTeamWork.contentTitle, opacity: isRun ? 0 : 1 }}>
                <p style={cssTeamWork.pTitle}>WORK</p>
                <p style={cssTeamWork.pTitle2}>TEAM</p>
            </div>
            <motion.img
                src={cssTeamWork.sticker} alt="sticker" style={{
                    ...cssTeamWork.stickerGoat,
                    top: isRun ? window.screen.width > 900 ? `calc( 50vh - 13vh )` : 'calc( 50vh - 9vh )' : window.screen.width > 900 ? '2em' : '1em',
                    right: isRun ? window.screen.width > 900 ? `calc((100vw - 29em) / 2 - 7vw)` : 'calc( 50vw - 20vw )' : window.screen.width > 900 ? '2em' : '0.5em',
                    scale: isRun ? 2 : 1
                }} />
            <motion.div layout style={{ ...cssTeamWork.divContentCarnets, right: isRun ? '-100vw' : 0 }}>
                <CarnetsTeam />
            </motion.div>
        </motion.div>
    )
}
