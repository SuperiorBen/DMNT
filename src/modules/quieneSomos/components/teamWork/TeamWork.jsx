import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import bgAnimated from '../../assets/carnets/bgAnimated.webp'

import sticker from '../../assets/carnets/workteamSticker.png'
import { useState } from 'react'
export const TeamWork = () => {
    // CSS variables
    const sizeAniText = window.screen.width > 900 ? (window.screen.width > 1536 ? '10em' : '8em') : '6em'
    const sizeAniText2 = window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '5em'
    const [isRun, setRun] = useState(true)

    // Control scroll 
    const { scrollYProgress } = useScroll()
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        scrollPosition < 0.55 && setRun(true)
        scrollPosition > 0.55 && setRun(false)
    })
    return (
        <motion.div layout style={{
            height: '100vh', width: window.screen.width > 900 ? `calc(100vw - 29em)` : '100vw', position: 'fixed', top: isRun ? '100vh' : 0,
            right: 0, zIndex: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start'
        }}>
            <div style={{ 
                position: 'absolute', right: window.screen.width > 900 ? '20vw' : '0.5em', display:'flex', flexDirection: window.screen.width > 900 ? 'column':'column-reverse', 
                justifyContent:'center', alignItems: window.screen.width > 900 ? 'flex-end' : 'flex-start'
                , top: window.screen.width > 900 ? '2em' : '20vh',
                opacity: isRun ? 0 : 1, transition: '1s ease-in-out',
                transitionDelay: '2s', writingMode: window.screen.width > 900 ? 'horizontal-tb' : 'vertical-lr', textOrientation: 'mixed'
                }}>
                <p style={{
                    fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: sizeAniText,
                    lineHeight: '0.8em', 
                    WebkitTextStroke: 'rgb(150 101 253 / 90%) 2px',
                     color: 'transparent',
                    userSelect: 'none', margin: 0,
                    WebkitBackgroundClip:'text',
                    backgroundImage:`url(${bgAnimated})`,
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}>WORK</p>
                <p style={{
                    fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: sizeAniText2,
                    lineHeight: '0.8em', color: 'rgb(150 101 253 / 90%)',
                    userSelect: 'none', margin: 0
                }}>TEAM</p>
            </div>
            <motion.img
                src={sticker} alt="sticker" style={{
                    width: window.screen.width > 900 ? '15vw' : '40vw',
                    height: window.screen.width > 900 ? '27vh' : '18vh',
                    position: 'absolute',
                    top: isRun ? window.screen.width > 900 ? `calc( 50vh - 13vh )` : 'calc( 50vh - 9vh )' : window.screen.width > 900 ? '2em' : '1em',
                    right: isRun ? window.screen.width > 900 ? `calc((100vw - 29em) / 2 - 7vw)` : 'calc( 50vw - 20vw )' : window.screen.width > 900 ? '2em' : '0.5em',
                    scale: isRun ? 2 : 1,
                    transition: '1s ease-in-out',
                    transitionDelay: '1.5s'
                }} />
        </motion.div>
    )
}
