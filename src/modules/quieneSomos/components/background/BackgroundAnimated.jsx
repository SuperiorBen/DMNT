import bgCreativa from "../../assets/background/bgTeamWork.png"
import bgTwist from "../../assets/background/psycoTwister.svg"
import bgStars from "../../assets/stars-bg.webp"
import scrollarrow from "../../assets/background/animations/scrollarrow.json"

import { motion } from "framer-motion"
import Lottie from "lottie-react";
import { useEffect, useRef, useState} from "react"
import '../../assets/css/styleQuienesSomos.css'

import { useMotionValueEvent, useScroll } from "framer-motion"

// css variables
const xTwister = window.screen.width > 900 ? `calc(100vw - 29em)` : `calc(100vw - (27em - 14em))`
const sizeAniText = window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '5em'

export const BackgroundAnimated = () => {

    const [section, setSection] = useState(1)

    // Twister background control 
    const [isOpen
        , setOpen
    ] = useState(false)
    // Text background animate control
    const [textAnimate, setTextAnimate] = useState(0)
    // content letter animate
    const ref = useRef(null);


    // Number of lines text control 
    const [letter
        , setLetter
    ] = useState('SOBRE NOSOTROS')
    const controlTime = window.screen.width > 900 ? 6 : 1
    let textTimes = controlTime
    let textBg = []
    while (textTimes >= 0) {
        textBg.push({ title: letter })
        textTimes = --textTimes
    }

    // Letter animated funtions ===========================================================

    useEffect(() => {
        ref.current.children[textAnimate].style.color = 'rgb(150 101 253 / 80%)'
    }, [textAnimate])

    useEffect(() => {
        setOpen(false)
        const timer = setTimeout(() => {
            setOpen(true)
            section == 1 && setLetter('SOBRE NOSOTROS')
            section == 2 && setLetter('¿QUIENES SOMOS?')
            section == 3 && setLetter('')
        }, 1500);
        return () => clearTimeout(timer);
    }, [section]);

    const runTextAnimate = () => {
        ref.current.children[textAnimate].style.color = 'transparent'
        if (textAnimate < controlTime) {
            setTextAnimate(textAnimate + 1)
        } else {
            setTextAnimate(0)
        }
    }
    setTimeout(runTextAnimate, 500);
    // END Letter animated funtions ===========================================================


    // Control scroll 
    const { scrollYProgress } = useScroll()
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        if (scrollPosition <= 0.10 && section != 1) setSection(1)
        scrollPosition > 0.10 && setSection(2)
        scrollPosition > 0.50 && setSection(3)
    })


    return (
        <div className="background" style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
            <motion.div style={{ scaleX: scrollYProgress, position: 'fixed', height: '8px', bottom: 0, left: 0, right: 0, zIndex: 99, background: '#94CED9', transformOrigin: '0%' }} />

            <img src={bgCreativa} alt="bgCreativa" style={{ height: '100vh', width: window.screen.width > 900 ? '29em' : '27em', position: 'absolute', top: 0, left: window.screen.width > 900 ? "0em" : "-14em", zIndex: 1, mixBlendMode: 'multiply' }} />

            <motion.div layout transition={{ duration: 0.5 }}
                style={{
                    height: '100vh', width: xTwister,
                    position: 'absolute', top: 0, right: isOpen ? `calc(-1 * ${xTwister})` : 0,
                    zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'
                }}>
                <motion.img animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    src={bgTwist} alt="twister" style={{ height: window.screen.width > 900 ? '200%' : '120%' }} />
            </motion.div>

            <motion.div layout ref={ref} transition={{ duration: 0.5 }} className="staggertext" style={{
                height: '100vh', width: xTwister, position: 'absolute', top: 0, right: isOpen ? 0 : `calc(-1 * ${xTwister})`,
                zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column-reverse', overflow: 'hidden',
                writingMode: window.screen.width > 900 ? 'horizontal-tb' : 'vertical-lr', textOrientation: 'mixed'
            }}>

                {
                    textBg.map((e, i) => <p key={i} style={{
                        margin: '0px', fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: sizeAniText,
                        lineHeight: '1em', WebkitTextStroke: 'rgb(150 101 253 / 60%) 2px', color: 'transparent',
                        userSelect: 'none'
                    }}>{e.title}</p>)
                }

                <Lottie style={{ position: 'absolute', left: window.screen.width > 900 ? '-1.5em' : '-1em', bottom: 0, height: window.screen.width > 900 ? '20%' : '10%',
                opacity: section == 1 ? 1 : 0 }}
                    animationData={scrollarrow} />

            </motion.div>

            <img style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
        </div>
    )
}
